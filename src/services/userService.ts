import client from "../database";

export const isUserNameTaken = async (user_name: string): Promise<Boolean> => {
   try {
    const sql = 'SELECT user_name FROM users';
    const conn = await client.connect();
    const result = await conn.query(sql);
    const userNames = result.rows;
    let isTaken = false;
    for (let i = 0; i < userNames.length; i++) {
        if (user_name === userNames[i].user_name) {
            isTaken = true;
            break;
        }
    }
    return isTaken;
   } catch (error) {
    throw new Error(`Something went wrong ${error}`);
   }
}