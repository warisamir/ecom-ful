import mongoose from "mongoose";
import validator from 'validator';

interface IUser extends Document{
    _id:string;
    name:string;
    email:string;
    photo:string;
    role:"user"|"admin";
    gender:"Male"|"Female";
    dob:Date;
    createdAt:Date;
    UpdatedAt:Date;
    age:number;
} 
const schema=new mongoose.Schema({
    _id:{
        type:String,
        required:[true,"Enter Id"], 
}, 
  name:{
        type:String,
        required:[true,"Enter you email"],
},  
  email :{
    type:String,
    unique:[true,"Enter email already exists"],
    required:[true,"Please add mail"],
    validate:validator.default.isEmail,
},
    photo:{
        type:String,
        required:[true,"Please add photo"],
}   
,
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",
},
gender: {
    type:String,
    enum:["Male","Female"],
    required:[true,"Please add gender"],
},  
 dob:{
    type:Date,
    required:[true,"Please add date of birth"],
}}
,{
    timestamps:true,
}
);
schema.virtual("age").get(function(){
    const today=new Date();
    const dob=this.dob;
    let age=today.getFullYear()-dob.getFullYear();
    if(today.getMonth()<dob.getMonth() ||( today.getMonth()===dob.getMonth() && today.getDate()<dob.getDate())){
            age--;
        }
        return age;
    }
);
export const User=mongoose.model<IUser>("User",schema);
