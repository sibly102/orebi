import 'dotenv/config'
import express from "express";
import dbConnect from './confiq/mongodb.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

dbConnect()

app.get("/", (req, res) => {
  res.send('Hello World!')
});
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})