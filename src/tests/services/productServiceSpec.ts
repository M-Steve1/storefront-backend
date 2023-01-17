import { ProductService } from '../../services/productService';

const productService = new ProductService();

describe('Produce service', () => {
  it('Should return the products under a specific category e.g games', async () => {
    const result = await productService.productsByCategory('games');
    expect(result).toEqual([
      {
        id: 1,
        name: 'ps5',
        price: 400000,
        category: 'games'
      },
     ]);
  });

  it('Should return the five most popular products', async () => {
    const result = await productService.fiveMostPopularProducts();
    expect(result).toEqual([
      {
        name: 'ps5'
      }
    ]);
  });
});
