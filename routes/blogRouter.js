import express from "express";
import crud from "../controller/crudc.js";

const blogRouter = express.Router();

blogRouter.get("/getblog", crud.get)

blogRouter.post("/postblog" ,crud.post)


blogRouter.put("/updateblog/:id",crud.update)


blogRouter.delete("/deleteblog/:id",crud.delete)


export default blogRouter;