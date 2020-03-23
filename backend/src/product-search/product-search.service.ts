import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';

import {Product} from "./product.interface";
import {CreateProductDTO} from "./create-product.dto";

@Injectable()
export class ProductSearchService {
    constructor(@InjectModel('Product') private readonly  productModel: Model<Product>) {
    }

    async getProduct(productASIN): Promise<Product> {
        const product = await this.productModel
            .findOne({asin: productASIN})
            .exec();

        console.log(productASIN, product);

        if (product) {
            return product;
        }

        const scrappedProducts = await this.scrapeProduct(productASIN);
        this.addProduct(scrappedProducts);

        return scrappedProducts
    }

    private async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = await this.productModel(createProductDTO);
        return newProduct.save();
    }

    private async scrapeProduct(productASIN: string): Promise<Product> {
        return {
            asin: productASIN,
            title: 'Apple iPhone XR vollständig entsperrt (erneuert), schwarz',
            rating: 4.5,
            reviewCount: 509,
            listPrice: '749,99 $',
            price: '549,00 $',
            availability: 5,
            description:
                'Dies ist ein Amazon-Renewed-Produkt'

        };
    }
}
