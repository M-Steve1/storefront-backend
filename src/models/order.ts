import client from "../database";

export type Order = {
    id?: string | number
    product_id: string,
    product_quantity: number,
    user_id: string,
    status: string
};

export class OrderStore {
    async create(o: Order): Promise<Order> {
        try {
            const sql = 'INSERT INTO orders(product_id, product_quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [o.product_id, o.product_quantity, o.user_id, o.status.toLowerCase()]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cannot create order${error}`);
        }
    }

    async addProduct(quantity: number, product_id: string, order_id: string): Promise<{quantity: number, product_id: string, order_id: string}> {
        // insert this into order service
        try {
            const sql = 'SELECT status FROM orders WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [order_id]);
            const orderStatus = result.rows[0].status;
            conn.release()
            if (orderStatus !== "active") {
                throw new Error("Order is not active");
            }
        } catch (error) {
            throw new Error(`Cannot find order: ${error}`);
        }

        try {
            const sql = 'INSERT INTO order_products(quantity, product_id, order_id) VALUES($1, $2, $3) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [quantity, product_id, order_id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`Cannot add product: ${error}`);
        }
    }

    
}