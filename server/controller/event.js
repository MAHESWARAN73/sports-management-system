import bcrypt from "bcrypt";
import env from "dotenv/config";
import jwt from "jsonwebtoken";
import Event from "../schema/event.js";

const addEvent=async(req,res)=>{
    const findevent=await Event.find({eve_name:req.body.eve_name})
    let data={
        eve_name:req.body.eve_name,
        eve_place:req.body.eve_place,
        eve_type:req.body.eve_type,
        from_date:req.body.from_date,//---done
        to_date:req.body.to_date,//-------done
        organiser:req.body.organiser
    }
        try{
                var insert=await Event.insertMany([data])
                res.send(insert)
            }
        catch(error){
            res.send(error.message);
        }    
      }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
//eve_placeview
const eve_placeview=async(req,res)=>{
  try {
    let eve_placeview=await Event.find({eve_place:req.params.eve_place})
  //   const view=await Event.find({_id:getDate._id},{_id:0,__v:0})
    res.send(eve_placeview)
    
  } catch (error) {
    res.status(400).send(error.message)
  }
}
//eve_typeview//
const eve_typeview=async(req,res)=>{
  try {
    let eve_typeview=await Event.find({eve_type:req.params.eve_type})
  //   const view=await Event.find({_id:getDate._id},{_id:0,__v:0})
    res.send(eve_typeview)
    
  } catch (error) {
    res.status(400).send(error.message)
  }
}
//view from_date event/////
const viewEvent=async(req,res)=>{
    try {
      let getDate=await Event.find({from_date:req.params.from_date})
    //   const view=await Event.find({_id:getDate._id},{_id:0,__v:0})
      res.send(getDate)
      
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//viewbyname
  const viewbyname=async(req,res)=>{
    try {
      let getDate=await Event.find({eve_name:req.params.eve_name})
    //   const view=await Event.find({_id:getDate._id},{_id:0,__v:0})
      res.send(getDate)
      
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
  //return_dateWise//
  const to_dateWise=async(req,res)=>{
    try{
      const view=await Event.find({to_date:req.params.to_date})
      res.send(view)
  
    }catch(error){
      res.status(400).send(error.message)
    }
}

//view all the event
const allEvent=async(req,res)=>{
    try{
      const {match='{}'}=req.query
      const view=await Event.find(JSON.parse(match))
      res.send(view)
  
    }catch(error){
      res.status(400).send(error.message)
    }
}
//get Event between  dates
const eventDate=async(req,res)=>{
    try {
    const from_date= req.params.from_date
    const to_date=req.params.to_date

    const findDate=await Event.find({from_date:{$gte:new Date(from_date)},to_date:{$lte:new Date(to_date)}})
      if(findDate.length<=0) return res.status(400).send("Data not found")
      res.send(findDate);
    } catch (error) {
        res.send(error.message)
    }
  }
//upcomming event//
  const upCominEvent=async (req,res)=>{
  try {
    var nowDate = new Date(); 
    var current_date = nowDate.getFullYear()+'-'+String(nowDate.getMonth()+1).padStart(2, '0')+'-'+String(nowDate.getDate()).padStart(2, '0');
    // console.log(current_date) 

   let pastDate=await Event.find({to_date:current_date})
  //  console.log(pastDate);
// res.send(to_date)
  
 let getdate=pastDate[0].to_date
 var old_date=getdate.getFullYear()+'-'+String(getdate.getMonth()+1).padStart(2, '0')+'-'+String(getdate.getDate()).padStart(2, '0')

if(old_date!==current_date) return res.send(null)

const find=await Event.find({from_date:{$gte:current_date}})
return res.send(find)   
} catch (error) {
    res.send(error)
  }
}

 
export {addEvent,viewEvent,allEvent,eventDate,upCominEvent,viewbyname,to_dateWise,eve_placeview,eve_typeview}