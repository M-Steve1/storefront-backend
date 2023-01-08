import client from '../database';
import { Order } from '../models/order';

export class OrderService {
  async isOrderActive(order_id: string): Promise<string> {
    try {
      const sql = 'SELECT status FROM orders WHERE id=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql, [order_id]);
      const orderStatus = result.rows[0].status;
      conn.release();
      return orderStatus;
    } catch (error) {
      throw new Error(`Cannot find order: ${error}`);
    }
  }

  async userCurrentOrder(user_id: string): Promise<Order> {
    try {
      const sql =
        'SELECT * FROM orders WHERE user_id=($1) AND status=($2) ORDER BY user_id DESC LIMIT 1';
      const conn = await client.connect();
      const result = await conn.query(sql, [user_id, 'active']);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  }

  async userCompletedOrders(user_id: string): Promise<Order[]> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id=($1) AND status=($2)';
      const conn = await client.connect();
      const result = await conn.query(sql, [user_id, 'completed']);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  }

  async isProductInCart(
    product_id: string,
    order_id: string
  ): Promise<boolean> {
    // Checks if a product already exist in an order.
    try {
      const sql =
        'SELECT * FROM order_products WHERE order_id=($1) AND product_id=($2)';
      const conn = await client.connect();
      const result = await client.query(sql, [order_id, product_id]);
      conn.release();
      const product = result.rows[0];
      if (product === undefined) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  }
}
