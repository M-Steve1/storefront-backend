import { ProductStore } from '../../models/product';

const productStore = new ProductStore();

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
