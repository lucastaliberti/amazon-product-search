import { Document } from 'mongoose';

export interface Product extends Document {
  readonly asin: string;
  readonly title: string;
  readonly rating: string;
  readonly reviewCount: number;
  readonly price: string;
  readonly dimensions: string;
  readonly category: string;
}
