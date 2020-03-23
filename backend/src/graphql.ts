
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Product {
    asin: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
    availability: number;
    dimensions: string;
}

export interface IQuery {
    product(asin: string): Product | Promise<Product>;
}
