import 'dotenv/config'
import express from "express";

import dbConnect from './confiq/mongodb.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors';
import productRoute from './routes/productRoute.js';
import connectcloudinary from './confiq/cloudinary.js';
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());


dbConnect()
connectcloudinary();

app.get("/", (req, res) => {
  res.send('Hello World!')
});
app.use("/api/user", userRouter);
app.use("/api/product", productRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})