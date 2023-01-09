import express from "express";
import { list, remove, save } from "../controller/menu.controller.js";

const menuRoute =  express.Router();

menuRoute.post("/save",save);
menuRoute.get("/list",list);
menuRoute.get("/delete/:id",remove);

export default menuRoute;