import express from "express";
import authRoutes from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import 'dotenv/config'
import { error } from "./middleware/error.js";
const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/', authRoutes);

app.use('*', (req, res, next)=>{
    res.json({
        mesage:'The requested resource is not found'
    })
})
app.use(error)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port 8001');
})