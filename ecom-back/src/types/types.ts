import { NextFunction,Request,Response } from "express";
export interface NewUserRequestBody{
    _id:string;
    name:string;
    email:string;
    photo:string;
    gender:string;
    dob:Date;
}
export type ControllerType =(
    req:Request,
    res:Response,
    Next:NextFunction,
    ) => Promise<void | Response<any, Record<string, any>>>