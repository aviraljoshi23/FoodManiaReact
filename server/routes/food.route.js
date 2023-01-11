import express from "express";
import { list, remove, save } from "../controller/food.controller.js";
import multer from "multer";

const foodRoute =  express.Router();
const upload =  multer({dest:"public/foodImages"})

foodRoute.post("/save",upload.single("foodImage"),save);
foodRoute.get("/list",list);
foodRoute.get("/delete/:id",remove);

export default foodRoute;