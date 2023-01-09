import mongoose from  "mongoose";

const menuSchema =  mongoose.Schema({
    hotelMenuName : {
        type:String,
        trim:true
    },
    categoryId :{
        type : mongoose.Schema.ObjectId,
        ref :"Hotel"
    }
})
export const  Menu  =   mongoose.model("HotelMenu",menuSchema);