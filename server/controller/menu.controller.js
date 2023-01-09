import { Menu } from "../model/menu.model.js";

export const list = async (req, res, next) => {
    try {
        await Menu.find({}).populate({path:'categoryId'}).then((result) => {
            res.json({ status: true, data: result });
        })
    }
    catch (err) {
        console.log("Cannot Fetch");
        res.json({ status: false, message: "Cannot Fetch the data because of  Server Error" });
    }
}

export const save = async (req, res, next) => {
    console.log(req.body.data);
    try {
        const menu = await Menu.create(req.body.data);
        const data = await Menu.find().sort({_id: -1 }).populate({path: "categoryId" })
        res.status(200).json({ message: "Menu Added Successfully", status: true, data })
    }
    catch (error) {
        console.log("Error Occurs");
    }
}

export const remove  = async(req,res,next)=>{
    try{
        const menu  = await Menu.deleteOne({_id:req.params.id});
        res.json({status:true,mess:"Deleted Successfullyy"});
    }
    catch(err){
        console.log("Cannot Delete");
        res.json({message:"Cannot Delete Because of Server Error",status:false});
    }
}

