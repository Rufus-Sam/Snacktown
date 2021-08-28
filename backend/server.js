import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js'
import productRoutes from './routes/productRoutes.js'
const app = express()
dotenv.config()
connectDb()

app.get('/', (req, res) => {
    res.send("WWE")
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))