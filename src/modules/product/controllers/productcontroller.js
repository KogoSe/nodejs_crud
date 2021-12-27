import ProductServices from '../services/product.services.js'

const Productcontroller = {
    getProduct: async(req,res) => {
        const products = await ProductServices.getAll()
        res.status(200).json({
            success:true,
            data: products
        })
    },
    getProductById: async (req,res) => {
        const { id } = req.params
        const product = await ProductServices.getOne(id)
        res.status(200).json({
        success:true,
        data: product
    })
    },
    createProduct: async (req,res) => {
        const {id,name,price} = req.body
        const created = await ProductServices.create({ name,price })
        res.status(201).json({
            sucess:true,
            data: created
        })
    },
    updateProduct: async (req,res) =>{
        const { id } = req.params
        const {name,price} = req.body
        const updated = await ProductServices.updateOne(id,{ name,price})
    
        res.status(200).json({
            success: true,
            data: updated
        })
    }
}

export default Productcontroller