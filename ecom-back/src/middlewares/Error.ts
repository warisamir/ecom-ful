import { NextFunction,Request,Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
export const errorMiddleWare=(
    err:ErrorHandler,
    req:Request,
    res:Response,
    next:NextFunction
    )=>{
        // shorthand just like p=p+1=> p+=1;
        err.message||="Internal Server error";
        err.statusCode ||= 500;
    return res.status(400).json({
       sucess:false,
        message:err.message
    });
}

export const TryCatch=()=>()=>{

}
