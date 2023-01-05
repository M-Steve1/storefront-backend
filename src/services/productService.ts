import client from "../database";
import { Product } from "../models/product";

export class ProductService {
    async fiveMostPopularProduct () {

    }

    async productsByCategory (category: string): Promise<Product[]> {
        try {
            const sql = 'SELECT * FROM products WHERE category=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [category.toLowerCase()]);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}