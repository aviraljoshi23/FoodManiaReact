import express from "express";

import {list, remove, save, update} from "../controller/hotel.controller.js";
const hotelRoute  = express.Router();

hotelRoute.get("/hotel-List",list);
hotelRoute.post("/save",save);
hotelRoute.get('/delete/:id',remove);
hotelRoute.post("/update",update);
export default hotelRoute;