import mongoose from "mongoose";

const HotelSchema =  mongoose.Schema({
    hotelName:{
        type:"String",
        required:true,
        trim:true,
    },
    hotelArea:{
        type:"String",
        required:true,
        trim:true,
    }
},
{
    versionKey:false
})

export const  hotelModel = mongoose.model('Hotel',HotelSchema);