import express, { Response,Request,NextFunction } from 'express';
import userRoutes from './routes/user.js';
import {connectDB} from './utils/feature.js';
import { errorMiddleWare } from './middlewares/Error.js';
import productRoutes from './routes/product.js';

const port=4000;
const app=express();
connectDB();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Working with /api/v1");
})
//using Routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/product",productRoutes);
app.use("/uploads",express.static("uploads"));
app.use(errorMiddleWare);
app.listen(port,()=>{
    console.log(`Express server is running on port ${port}`)
})