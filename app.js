import express from 'express'
import AppMiddeware from './src/app.middleware.js'
import AppRouter from './src/app.route.js'
import AppConfig from './src/app.config.js'

const  app = express()

app.use(AppConfig)
app.use(AppMiddeware)
app.use(AppRouter)

app.get('/',(req,res) =>{
    res.status(200).json({
        sucess:true,
        data:{
            timestamp:new Date()
        }
    })
})


const PORT = process.env.PORT || 3030
app.listen(PORT, ()=> {
    console.log(`server is runing on ${PORT}`)
})