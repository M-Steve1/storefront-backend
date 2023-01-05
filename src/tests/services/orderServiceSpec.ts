import { OrderService } from "../../services/orderService";

const orderService = new OrderService();

describe('Order Service', () => {
    it('Expects the order status to be active', async () => {
        const result = await orderService.isOrderActive('1');
        expect(result).toEqual('active')
    });
    it('Should return the current active order of specified(id) user', async () => {
        const result = await orderService.userCurrentOrder('19');
        expect(result).toEqual({
            id: 2,
            product_id: '4',
            product_quantity: 5,
            user_id: '19',
            status: 'active'
        })
    });
    it('Should return all the orders completed by the specified(id) user', async () => {
        const result = await orderService.userCompletedOrders('19');
        expect(result).toEqual([{
            id: 4,
            product_id: '7',
            product_quantity: 1,
            user_id: '19',
            status: 'completed'
        }])
    })
})