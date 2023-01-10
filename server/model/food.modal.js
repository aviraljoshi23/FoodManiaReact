import mongoose from "mongoose";

const foodSchema =  mongoose.Schema({
    hotelId:{
        type:mongoose.Schema.ObjectId,
        ref:"Hotel"
    },
    menuCategoryId:{
        type:mongoose.Schema.ObjectId,
        ref:"HotelMenu"
    },
    foodName :{
        type:String,
        trim:true
    },
    foodPrice:{
        type:Number,
    },
    foodDescription:{
        type:String,
        trim:true
    },
    foodImage:{
        type:String,
    },
})
export const foodModal =  mongoose.model("HotelFood",foodSchema);