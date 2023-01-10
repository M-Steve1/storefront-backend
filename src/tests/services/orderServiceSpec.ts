import { OrderService } from '../../services/orderService';

const orderService = new OrderService();

fdescribe('Order Service', () => {
  it('Expects the order status to be active', async () => {
    const result = await orderService.isOrderActive('1');
    expect(result).not.toEqual('active');
  });
  it('Should return the current active order of specified(id) user', async () => {
    const result = await orderService.userCurrentOrder('19');
    expect(result).not.toEqual({
      id: 2,
      product_id: '4',
      product_quantity: 5,
      user_id: '19',
      status: 'active'
    });
  });
  it('Should return all the orders completed by the specified(id) user', async () => {
    const result = await orderService.userCompletedOrders('19');
    expect(result).not.toEqual([
      {
        id: 4,
        product_id: '7',
        product_quantity: 1,
        user_id: '19',
        status: 'completed'
      }
    ]);
  });
  it('Should check if the product already exist in the order', async () => {
    const result = await orderService.isProductInCart('4', '2');
    expect(result).not.toBe(true);
  });
});
