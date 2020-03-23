import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    asin: {type: String, index: {unique: true}},
    title: String,
    rating: Number,
    reviewCount: Number,
    price: String,
    dimensions: String,
});