import { ProductService } from '../../services/productService';

const productService = new ProductService();

describe('Produce service', () => {
  it('Should return the products under a specific category e.g Games', async () => {
    const result = await productService.productsByCategory('Games');
    expect(result).toEqual([
      {
        id: 1,
        name: 'PS4',
        price: 265000,
        category: 'games'
      },
      {
        id: 2,
        name: 'PS4',
        price: 265000,
        category: 'games'
      },
      {
        id: 3,
        name: 'PS4',
        price: 400000,
        category: 'games'
      },
      {
        id: 4,
        name: 'PS5',
        price: 400000,
        category: 'games'
      }
    ]);
  });

  it('Should return the five most popular products', async () => {
    const result = await productService.fiveMostPopularProducts();
    expect(result).toEqual([
      {
        name: 'samsung z-fold2'
      },
      {
        name: 'PS5'
      },
      {
        name: 't-shirt'
      },
      {
        name: 'coconut bread'
      },
      {
        name: 'iphone xr'
      }
    ]);
  });
});
