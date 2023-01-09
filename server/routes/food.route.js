import express from "express";
import { list, save } from "../controller/food.controller.js";

const foodRoute =  express.Router();

foodRoute.post("/save",save);
foodRoute.get("/list",list);

export default foodRoute;