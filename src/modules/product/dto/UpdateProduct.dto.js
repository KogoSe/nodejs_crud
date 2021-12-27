import Joi from "joi";

export const UpdateProductDto = Joi.object({
    name:Joi.string().optional(),
    price:Joi.number().optional(),
})

// export const ProductParamsDto = Joi.object({
//     id:Joi.string().required()
// })