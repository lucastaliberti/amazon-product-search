
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
    listPrice: string;
    price: string;
    availability: number;
    description?: string;
}

export interface IQuery {
    product(asin: string): Product | Promise<Product>;
}
