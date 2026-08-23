import express from 'express'
const app =express()
// import { mongo } from 'mongoose'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import cookieParser from 'cookie-parser'
//config
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static('./src/public/temp'))

// DataBase Connection


//routes
app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.send("Welcome")
})




//server


export {app}