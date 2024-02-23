import mongoose from "mongoose";

const eventreg={
    stu_name:{
        type:String,
        required:true
    },
    RegNo:{
        type: String,
        required: true,
        uppercase: true,
        unique: true
    },
    dept:{
        type:"string",
        required:true
    },
    course:{
        type:"string",
        required:true
    },
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    phone_no:{
        type:"String",
        required:true,
    },

}

 const EventReg=mongoose.model("EventReg",eventreg)

export default EventReg
