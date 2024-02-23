import bcrypt from "bcrypt";
import env from "dotenv/config";
import jwt from "jsonwebtoken";
import EventReg from "../schema/eventReg.js";
import Event from "../schema/event.js";
const addData=async(req,res)=>{
    try{
        var event=await Event.findOne({eve_name:req.body.eve_name})
        // console.log(event);
        let data={
            stu_name:req.body.stu_name,
            RegNo:req.body.RegNo,
            dept:req.body.dept,
            course:req.body.course,
            event:event._id,
            phone_no:req.body.phone_no
        }
                var insert=await EventReg.insertMany([data])
                res.send(insert)
            }
        catch(error){
            console.log(error.message);
                }    
    }
//   ~~~~~~~~~~~view data~~~~~~~~~~~~~   //
const View=async(req,res)=>{
    const data=await EventReg.find().populate('event')
    res.send(data)
}
//   ~~~~~~~~~~~view stu_namewise~~~~~~~~~~~~~   //
const stu_namewise=async(req,res)=>{
        const stu_namewise=await EventReg.find({stu_name:req.params.stu_name}).populate('event')
        res.send(stu_namewise)
        }
//~~~~~~~~~~deptWise~~~~~~~~~~~~~~~~~~~~//
const deptwise=async(req,res)=>{
            const deptwise=await EventReg.find({dept:req.params.dept}).populate('event')
            res.send(deptwise)
        }
//~~~~~~~~~~courseWise~~~~~~~~~~~~~~~~~~~~//
const courseWise=async(req,res)=>{
    const courseWise=await EventReg.find({course:req.params.course}).populate('event')
    res.send(courseWise)
}
///~~~~~~~~~~~~~~~view using event convert by event id for developers~~~~~~~~~~~~~//
const viewbyevent=async(req,res)=>{
    var eve_name=req.params.eve_name
    const view=await EventReg.aggregate([
        {
            $lookup:{
                from:'events',//using refrence by db 
                localField:'event',//using refrence by our schema name "event"
                foreignField:'_id',//using _id in req.body
                as:'event'
            }
        },{
            $unwind:'$event'
        },{
            $match:{
                "event.eve_name":eve_name
            }
        }
    ])
    res.send(view)
}

export {addData,View,viewbyevent,stu_namewise,deptwise,courseWise}