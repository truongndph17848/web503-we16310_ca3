import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import productRoute from './routes/product';
import userRoute from './routes/auth';


const app = express();


// middleware
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute);
app.use("/api", userRoute);

//mongoose
mongoose.connect("mongodb://localhost:27017/web16310")
.then(()=>{console.log("ket noi db thanh cong");})
.catch((error)=>{console.log(error);})



// connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});