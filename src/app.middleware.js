import express from "express";
import cors from 'cors'
import Requestinfo from './middlewares/request-info_middleware.js'
import humpsMidlleware from "./middlewares/humps.midlleware.js";


const AppMiddeware = express()

AppMiddeware.use(express.urlencoded({ extened: true}))
AppMiddeware.use(express.json())
AppMiddeware.use(cors())
AppMiddeware.use(Requestinfo())
AppMiddeware.use(humpsMidlleware())

// AppMiddeware.use((req,res,next)=>{
//     console.log(`Timestamp: ${new Date()}`)
//     next()
// })

export default AppMiddeware