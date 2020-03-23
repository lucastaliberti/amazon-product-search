
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Product {
    asin: string;
    title: string;
    rating: string;
    reviewCount: number;
    price: string;
    dimensions: string;
    category: string;
}

export interface IQuery {
    product(asin: string): Product | Promise<Product>;
}
