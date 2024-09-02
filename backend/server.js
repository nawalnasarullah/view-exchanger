import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import { connectDB } from "./config/db.js";
import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config'
import { error } from "./middleware/error.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();
connectDB();

const corsOption = {
    origin: "http://localhost:3000",
    credentials: true
}

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

app.use(cors(corsOption));

app.use(cookieParser());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', paymentRoutes);


// app.use('*', (req, res, next)=>{
//     res.json({
//         mesage:'The requested resource is not found'
//     })
// })


app.use(error)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port 8001');
})