import client from "../database";
import { OrderService } from "../services/orderService";

const orderService = new OrderService();

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

    async addProduct(quantity: number, product_id: string, order_id: string): Promise<{id: string | number, quantity: number, product_id: string, order_id: string}> {
        const isActive = await orderService.isOrderActive(order_id);
        if (isActive === 'active') {
            try {
                const sql = 'INSERT INTO order_products(quantity, product_id, order_id) VALUES($1, $2, $3) RETURNING *';
                const conn = await client.connect();
                const result = await conn.query(sql, [quantity, product_id, order_id]);
                conn.release();
                return result.rows[0];
            } catch (error) {
                throw new Error(`Cannot add product: ${error}`);
            }
        } else {
            throw new Error('Order is not active');
        }
    }
}