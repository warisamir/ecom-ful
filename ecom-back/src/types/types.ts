import { NextFunction,Request,Response } from "express";
export interface NewUserRequestBody{
    _id:string;
    name:string;
    email:string;
    photo:string;
    gender:string;
    dob:Date;
}
export interface NewProductRequestBody{
    
    name:string;
    category:string;
    price:number;
    stock:number;
}
export type ControllerType =(
    req:Request<any>,
    res:Response,
    Next:NextFunction,
    ) => Promise<void | Response<any, Record<string, any>>>