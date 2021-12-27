import Joi from "joi";

export const CreateProductDto = Joi.object({
    id : Joi.string().optional(),
    name : Joi.string().required(),
    price : Joi.number().optional().default(0)
})