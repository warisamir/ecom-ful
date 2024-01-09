import  { NextFunction,Request,Response } from "express";
import { NewUserRequestBody } from "../types/types.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/Error.js";

export const newUser=TryCatch(
   async(
   req:Request<{},{},NewUserRequestBody>,
   res:Response,
   next:NextFunction)=>{
//  return next(new ErrorHandler("Not yet implemented",500));
 const {_id,name,email,photo,gender,dob}=req.body;
 let user =await User.findById({_id});
 if(user)
return  res.status(200).json({
   success:true,
   mesaage:`welcome ${user.name}`
})
 if(!_id || !name || !email || !photo || !gender || !dob){
    return next(new ErrorHandler("Please add all fields",400));
 }
  user=await User.create({
   _id,
   name,
   email,
   photo,
   gender,
   dob:new Date(dob),
});
return res.status(201).json({
   success:true,
   mesaage:`welcome ${user.name}`
});
}
)


export const getAllUser=TryCatch(async(req,res,next)=>{
 const users =await User.find({});
 return res.status(200).json({
   status:true,
   users,
 })
});

export const getUser=TryCatch(async(req,res,next)=>{
   const id=req.params.Id;
   const user=await User.findById(id);
   if(!user) 
   { 
      return next(new ErrorHandler("User not found",404))
   }
   else 
   {return res.status(200).json({
      status:true,
      user,
   })
}
})
export const deleteUser=TryCatch(async(req,res,next)=>{
   const id=req.params.Id;
   // var name=req.params.name;
   const user=await User.findById(id);
   if(!user) return next(new ErrorHandler("User not found",404))
   const deleteuser=await User.deleteOne({id:id})
   return res.status(200).json({
      sucesss:true,
      message:`user ${user.name} has been deleted`
   })
})