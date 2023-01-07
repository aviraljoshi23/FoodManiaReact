import { Menu } from "../model/menu.model";

export const save =   async(req,res,next)=>{
    console.log(req.body);
    try{
        Menu.create(req.body.data);
    res.status(200).json({message:"Menu Added Successfully",status:true,data})
    }
    catch(error){
        console.log("Error hai bhai error");
    }
}