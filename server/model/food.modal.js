import mongoose from "mongoose";

const foodSchema =  mongoose.Schema({

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
        trim:true
    },
    hotelId:{
        type:mongoose.Schema.ObjectId,
        ref:"Hotel"
    },
    menuCategoryId:{
        type:mongoose.Schema.ObjectId,
        ref:"HotelMenu"
    }

})
export const foodModal =  mongoose.model("HotelFood",foodSchema);