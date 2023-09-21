import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.URI)

const db = mongoose.connection;

db.on('error',()=> {
    console.log("not connected")
});
db.once('open', () => {
  console.log('Connected to MongoDB!');
});



import blogRouter from "./routes/blogRouter.js";
app.use("/" , blogRouter);

app.listen(8000,function () {
    console.log("ok ha")
})
