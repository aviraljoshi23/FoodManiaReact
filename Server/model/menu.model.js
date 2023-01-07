import mongoose from  "mongoose";

const menuSchema =  new mongoose.Schema({
    hotelMenuName : {
        type:"String",
        trim:true
    },
    hotelMenuTiming :{
        type:"String"
    },
    hotelId:{
        type:mongoose.ObjectId,
        ref:"Hotel"
    }
})
export const  Menu  =   mongoose.model("HotelMenu",menuSchema);