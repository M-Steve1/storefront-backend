import { ProductStore } from '../../models/product';

const productStore = new ProductStore();

// Note: Populate your database tables with data to use for testing.
// Make sure to setup/edit the specs with the data before running it.
// Using the specs below without editing will cause test to fail because
// they were setup base on the data contained in my database.

describe('Product model', () => {
  it('Should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });
  it('Should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });
  it('Should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  it('Should return all the products', async () => {
    const result = await productStore.index();
    expect(result).toEqual([]);
  });
  it('Should return the specified(id) product', async () => {
    const result = await productStore.show('4');
    expect(result).toEqual({
      id: 4,
      name: 'PS5',
      price: 400000,
      category: 'Games'
    });
  });
  it('Should create a product', async () => {
    const result = await productStore.create({
      name: 'PS5',
      price: 400000,
      category: 'Games'
    });
    expect(result).toEqual({
      id: 4,
      name: 'PS5',
      price: 400000,
      category: 'Games'
    });
  });
});
