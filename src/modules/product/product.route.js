import express from "express";
import Productcontroller from "./controllers/productcontroller.js";
import { createValidator } from "express-joi-validation"; 
import { CreateProductDto } from "./dto/create-product.dto.js";
import { UpdateProductDto } from "./dto/UpdateProduct.dto.js";


const ProductRouter = express.Router()
const Validator = createValidator({})

ProductRouter.get('/',Productcontroller.getProduct)
ProductRouter.get('/:id',Productcontroller.getProductById)
ProductRouter.post('/',Validator.body(CreateProductDto),Productcontroller.createProduct)
ProductRouter.patch('/:id',Validator.body(UpdateProductDto),Productcontroller.updateProduct)


export default ProductRouter  