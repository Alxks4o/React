import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from './routes/products.js';

dotenv.config()

const app = express();


app.use(express.json())  //allows us to accept JSON data in the req.body

app.use('/api/products', productRoutes);

app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log(`Server started at port: ${process.env.PORT}`);
})