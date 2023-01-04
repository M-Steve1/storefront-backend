import client from "../database";
import bcrypt from 'bcrypt';
import envVariables from '../config';

const {pepper, saltRounds} = envVariables

export type User = {
    id?: string,
    firstName: string,
    lastName: string,
    userName: string,
    password: string
};

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const sql = 'SELECT * FROM users';
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
            const hashedPassword = bcrypt.hashSync(u.password + pepper, saltRounds);
            const sql = 'INSERT INTO users(firstName, lastName, userName, password) VALUES($1, $2, $3, $4) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [u.firstName, u.lastName, u.userName, hashedPassword]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cannot create user ${error}`);
        }
    }

    async show(id: string): Promise<User> {
        try {
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cannot find user ${error}`)
        }
    }
}