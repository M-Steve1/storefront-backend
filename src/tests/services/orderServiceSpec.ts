import { OrderService } from '../../services/orderService';

const orderService = new OrderService();

describe('Order Service', () => {
  it('Expects the order status to be active', async () => {
    const result = await orderService.isOrderActive('1');
    expect(result).toEqual('active');
  });
  it('Should return the current active order of specified(id) user', async () => {
    const result = await orderService.userCurrentOrder('1');
    expect(result).toEqual({
      id: 1,
      product_id: '1',
      product_quantity: 3,
      user_id: '1',
      status: 'active'
    });
  });
  it('Should return all the orders completed by the specified(id) user', async () => {
    const result = await orderService.userCompletedOrders('1');
    expect(result).toEqual([]);
  });
  it('Should check if the product already exist in the order', async () => {
    const result = await orderService.isProductInCart('1', '1');
    expect(result).toBe(true);
  });
});
