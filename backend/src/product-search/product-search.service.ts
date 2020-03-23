import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { launch } from 'puppeteer';
import { Model } from 'mongoose';

import { Product } from './product.interface';
import { CreateProductDTO } from './create-product.dto';

@Injectable()
export class ProductSearchService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProduct(productASIN): Promise<Product> {
    const product = await this.productModel
      .findOne({ asin: productASIN })
      .exec();

    if (product) {
      return product;
    }

    const scrappedProducts = await this.scrapeProduct(productASIN);
    this.addProduct(scrappedProducts);

    return scrappedProducts;
  }

  private async addProduct(
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const newProduct = await this.productModel(createProductDTO);
    return newProduct.save();
  }

  private async scrapeProduct(productASIN: string): Promise<Product> {
    try {
      const browser = await launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--window-size=1920,1080',
          '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
        ],
      });

      const page = await browser.newPage();
      await page.goto(`https://www.amazon.com/dp/${productASIN}`);
      await page.waitForSelector('body');

      const productInfo = await page.evaluate(productASIN => {
        // Get product title
        const title = (document.body.querySelector(
          '#productTitle',
        ) as HTMLElement).innerText;

        // Get review count
        const rawReviewCount = (document.body.querySelector(
          '#acrCustomerReviewText',
        ) as HTMLElement).innerText;
        const reviewCount = parseFloat(
          rawReviewCount.replace(/[^0-9]/g, '').trim(),
        );

        // Get and format rating
        const rating = (document.body.querySelector(
          '.a-icon.a-icon-star',
        ) as HTMLElement).innerText;

        // Get price
        const price = (document.body.querySelector(
          '#price_inside_buybox',
        ) as HTMLElement).innerText;

        // Get dimensions
        const dimensionsElement = document.body.querySelector(
          '.size-weight:nth-child(2) > .value',
        ) as HTMLElement;

        const regex = RegExp('.+x.+x.+inches$');

        const dimensions = dimensionsElement
          ? dimensionsElement.innerText
          : ([...document.body.querySelectorAll('td.a-size-base')].find(node =>
              regex.test((node as HTMLElement).innerText),
            ) as HTMLElement).innerText;

        // Get category
        const category = [
          ...document.querySelectorAll(
            '.a-unordered-list.a-horizontal.a-size-small > li > span',
          ),
        ].reduce((acc, v) => `${acc} ${(v as HTMLElement).innerText}`, '');

        return {
          asin: productASIN,
          title,
          rating,
          reviewCount,
          price,
          dimensions,
          category,
        };
      }, productASIN);

      await browser.close();

      return productInfo;
    } catch (e) {
      throw e;
    }
  }
}
