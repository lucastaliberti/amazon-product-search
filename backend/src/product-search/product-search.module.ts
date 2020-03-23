import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {ProductSchema} from "./product.schema";
import {ProductsResolver} from "./products.resolver";
import {ProductSearchService} from './product-search.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    ],
    providers: [ProductSearchService, ProductsResolver]
})
export class ProductSearchModule {
}
