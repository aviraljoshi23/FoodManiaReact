import { foodModal } from "../model/food.modal.js";

export const save =  async(req,res,next)=>{
    try{
        req.body.foodImage =  req.file.filename;
        console.log(req.body);
        const food  = await foodModal.create(req.body);
        res.status(200).json({message:"Food Added Successfully",status:true})
    }
    catch(error){
        console.log("Some Error Occure");
    }
}
export const list =  async(req,res,next)=>{
    try{
        await foodModal.find({}).populate({path:'hotelId'}).populate({path:"menuCategoryId"}).then((result)=>{
            res.json({status:true,foodList:result});
        })
        .catch((error)=>{
            res.json({status:false,message:"Could Not Fetch the data"});
        })
    }
    catch(error){
        console.log("Some Error ocuure");
    }

}

export const remove =  async(req,res,next)=>{
    try{
        
    }
}