import express from 'express'
import ProductRouter from './modules/product/product.route.js'
import UserRouter from './modules/user/user.route.js'

const AppRouter =  express()

AppRouter.use('/product', ProductRouter)
AppRouter.use('/user',UserRouter)

export default AppRouter