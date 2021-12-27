import { query } from 'express';
import ProductModel from '../models/product.schema.js';

const ProductServices = {
    create: (payload) => {
        return new ProductModel(payload).save()
    },
    getAll: (query = {}) => {
        return ProductModel.find(query)
    },
    getOne :(id) =>{
        return ProductModel.findOne({ _id: id})
    },
    updateOne : (id,payload) =>{
        return ProductModel.findOneAndUpdate({ _id: id},{ $set: payload })
    }
}

export default ProductServices