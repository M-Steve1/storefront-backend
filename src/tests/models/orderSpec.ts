import { OrderStore } from '../../models/order';

// Note: Populate your database tables with data to use for testing.
// Make sure to setup/edit the specs with the data before running it.
// Using the specs below without editing will cause test to fail because
// they were setup base of the data contained in my database.

const orderStore = new OrderStore();

describe('Order model', () => {
  it('Should have a create method', () => {
    expect(orderStore.create).toBeDefined();
  });
  it('Should have a addProduct method', () => {
    expect(orderStore.addProduct).toBeDefined();
  });

  beforeAll( async () => {
    const result = await orderStore.create({
      product_id: '1',
      product_quantity: 3,
      user_id: '1',
      status: 'active'
    });
    expect(result).toEqual({
      id: 1,
      product_id: '1',
      product_quantity: 3,
      user_id: '1',
      status: 'active'
    });
  });

  it('Should add a product to an active order', async () => {
    const result = await orderStore.addProduct(3, '1', '1');
    expect(result).toEqual({
      id: 1,
      quantity: 3,
      product_id: '1',
      order_id: '1'
    });
  });
});
