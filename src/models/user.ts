import client from '../database';
import bcrypt from 'bcrypt';
import envVariables from '../config';

const { pepper, saltRounds } = envVariables;

export type User = {
  id?: string | number;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const sql = 'SELECT id, first_name, last_name, user_name FROM users';
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot fetch users ${error}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const hashedPassword = bcrypt.hashSync(
        u.password + pepper,
        parseInt(saltRounds)
      );
      const sql =
        'INSERT INTO users(first_name, last_name, user_name, password) VALUES($1, $2, $3, $4) RETURNING *';
      const conn = await client.connect();
      // fName and lName to lowercase to allow naming consistency
      const result = await conn.query(sql, [
        u.first_name.toLowerCase(),
        u.last_name.toLowerCase(),
        u.user_name,
        hashedPassword
      ]);
      conn.release();
      const user = result.rows[0];
      delete user.password;
      return user;
    } catch (error) {
      throw new Error(`Cannot create user ${error}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql =
        'SELECT id, first_name, last_name, user_name FROM users WHERE id=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      const user = result.rows[0];
      delete user.password;
      return user;
    } catch (error) {
      throw new Error(`Cannot find user ${error}`);
    }
  }

  async authenticate(user_name: string, password: string): Promise<User> {
    try {
      const sql = 'SELECT * FROM users WHERE user_name=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql, [user_name]);
      conn.release();

      try {
        const user = result.rows[0];
        const correctPassword = await bcrypt.compare(
          password + pepper,
          user.password
        );
        if (correctPassword) {
          delete user.password;
          return user;
        } else {
          throw new Error('Cannot login');
        }
      } catch (error) {
        throw new Error(`Can't login: ${error}`);
      }
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }
}
