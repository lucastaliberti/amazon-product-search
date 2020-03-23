import {Args, Query, Resolver} from "@nestjs/graphql";

import {ProductSearchService} from "./product-search.service";

@Resolver('Product')
export class ProductsResolver {
    constructor(
        private productSearchService: ProductSearchService,
    ) {
    }

    @Query()
    async product(@Args('asin') asin: string) {
        return this.productSearchService.getProduct(asin);
    }
}