import  { NextFunction,Request,Response } from "express";
import { NewUserRequestBody } from "../types/types.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser=async(
    req:Request<{},{},NewUserRequestBody>,
    res:Response,
    next:NextFunction)=>{
try{
   throw new Error()
 return next(new ErrorHandler("Mera Error customer",402));
const {_id,name,email,photo,gender,dob}=req.body;


const user=await User.create({
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
}catch(error){
   return  next(error)
}
}