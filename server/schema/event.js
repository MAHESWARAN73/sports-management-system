import mongoose from "mongoose";
import Joi from "joi";

const event={
    eve_name:{
        type:String,
        required:true
    },
    eve_place:{
        type:"string",
        required:true
    },
    eve_type:{
        type:String,
        enum:['solo','team'],
        required:true
    },
    from_date:{
        type:String,
        required:true
    },
    to_date:{
        type:String,
        required:true
    },
    organiser:{
        type:String,
        required:true
    }
}

 const Event=mongoose.model("Event",event)

export default Event
