import mongoose from "mongoose";
import Joi from "joi";

const noDue={
    stu_name:{
        type:String,
        required:true
    },
    Reg_no:{
        type:"string",
        required:true
    },
    phn_number:{
        type:String,
        required:true
    },
    req_material:{
        type:String,
        required:true
    },
    out_date:{
        type:String,
        required:true
    },
    return_date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:null,
        enum:["Due","No_due"],
        required:true
    },
}

 const No_Due=mongoose.model("No_Due",noDue)

export default No_Due
