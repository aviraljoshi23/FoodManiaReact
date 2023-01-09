import { foodModal } from "../model/food.modal.js";

export const save =  async(req,res,next)=>{
    try{
        const save  =  await foodModal.create(req.body.data);
        const data = await Menu.find().sort({_id: -1 }).populate({path: "hotelId" }).populate({path:"menuCategoryId"})
        res.json({status:true,data:data});
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