import { OrderStore } from "../../models/order";

const orderStore = new OrderStore();

describe('Order model', () => {
    it('Should have a create method', () => {
        expect(orderStore.create).toBeDefined();
    });
    it('Should have a addProduct method', () => {
        expect(orderStore.addProduct).toBeDefined();
    });

    it('Should create a new order', async () => {
        const result = await orderStore.create({
            product_id: "7",
            product_quantity: 1,
            user_id: "19",
            status: "completed"
        });
        expect(result).toEqual({
            id: 4,
            product_id: "7",
            product_quantity: 1,
            user_id: "19",
            status: "completed"
        })
    });

    it('Should add a product to an active order', async() => {
        const result = await orderStore.addProduct(6, "8", "3");
        expect(result).toEqual({
            id: 2,
            quantity: 6,
            product_id: "8",
            order_id: "3"
        })
    })
})
