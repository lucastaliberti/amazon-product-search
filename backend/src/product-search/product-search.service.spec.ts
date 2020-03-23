import { Model } from 'mongoose';
import { ProductSearchService } from './product-search.service';
import { Product } from './product.interface';

const mockedProduct = {
  asin: 'ABC123',
  title: 'Test Product',
  rating: '5',
  reviewCount: 100,
  price: '$100',
  dimensions: '1 x 1 x 1 inches',
  category: 'Testing > Mocks',
};

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let productModel: Model<Product>;

  beforeEach(async () => {
    productModel = {
      findOne: jest.fn(() => ({
        exec: () => Promise.resolve(mockedProduct),
      })),
    };

    service = new ProductSearchService(productModel);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('returns an product when model is defined', async () => {
    expect(await service.getProduct('ABC123')).toBe(mockedProduct);
  });

  it('should resolve from the parser if the model is not defined', async () => {
    productModel = {
      findOne: jest.fn(() => ({
        exec: () => Promise.resolve(null),
      })),
    };

    service = new ProductSearchService(productModel);

    jest
      .spyOn<any, any>(service, 'scrapeProduct')
      .mockImplementation(() => Promise.resolve(mockedProduct));
    jest
      .spyOn<any, any>(service, 'addProduct')
      .mockImplementation(() => Promise.resolve(mockedProduct));

    expect(await service.getProduct('ABC123')).toBe(mockedProduct);
  });
});
