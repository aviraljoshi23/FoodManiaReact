import express from "express";
import mongoose from "mongoose"
import hotelRoute from "./routes/hotel.route.js";
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cors from 'cors';
import menuRoute from "./routes/menu.route.js";
import foodRoute from "./routes/food.route.js";

const app =  express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.json());
mongoose.set("strictQuery",true);
mongoose.connect('mongodb://aviraljoshi23:aviral23@ac-e5rg2mw-shard-00-00.nilz3tv.mongodb.net:27017,ac-e5rg2mw-shard-00-01.nilz3tv.mongodb.net:27017,ac-e5rg2mw-shard-00-02.nilz3tv.mongodb.net:27017/?ssl=true&replicaSet=atlas-868r1i-shard-0&authSource=admin&retryWrites=true&w=majority',err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Aviral is connected to Atlas");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use("/hotel",hotelRoute);
        app.use("/menu",menuRoute);
        app.use("/food",foodRoute);
        app.listen(3000,(req,res)=>{
            console.log(`listening on http://localhost:${3000}`);
        })
    }
})