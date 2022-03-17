// const express = require('express');
import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import userRoute from './routes/user';
import morgan from 'morgan';
import mongoose from 'mongoose';

import categoryRoute from './routes/category'

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)
app.use("/api", userRoute )
app.use("/api", categoryRoute)

//mongoose
mongoose.connect("mongodb://localhost:27017/web16310")
.then(()=>{console.log("ket noi db thanh cong");})
.catch((error)=>{console.log(error);})



// connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});
