import { hotelModel } from "../model/hotel.modal.js";
export const list  = (req,res,next)=>{
    hotelModel.find({}).then(result=>{
        res.json({status:true,hotelList:result})
    })
    .catch(err=>{
        console.log(err);
    })
}
export const save = async(req,res,next)=>{
    try{
        console.log(req.body.data);
        const data  = await hotelModel.create(req.body.data);
       return res.json({status:true,data});
    }
    catch(error){
        console.log(error);
    }
}

export const remove = async(req,res,next)=>{
    try{
        const data = await hotelModel.deleteOne({_id:req.params.id});
        res.json({status:true,mess:"Deleted Successfullyy"});
    }
    catch(err){
        console.log(err);
    }
}
// export const update = async(req,res,next)=>{
//     try{
//         await hotelModel.updateOne({_id:req.body.id},{
//             $set:req.body.hotelObject
//         })
//         res.status(200).json({message:"Updated Succesfully"});
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({message:"Could'nt Update"});
//     }
// }

export const update = async (req,res,next)=>{
    try {
         await hotelModel.updateOne({_id:req.body._id},{$set:{hotelName:req.body.hotelName,hotelArea:req.body.hotelArea}})
         return res.status(200).json({mess:"Hotel Updated successfully...",status:true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess:"Internal server error...",status:false})
    }
}