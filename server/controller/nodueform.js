import bcrypt from "bcrypt";
import env from "dotenv/config";
import jwt from "jsonwebtoken";
import No_Due from "../schema/nodueForm.js";

const Nodue=async(req,res)=>{
     const nodue=await No_Due.find({e_name:req.body.e_name})
     let nodues={
        stu_name:req.body.stu_name,
        Reg_no:req.body.Reg_no,
        phn_number:req.body.phn_number,
        req_material:req.body.req_material,
        out_date:req.body.out_date,
        return_date:req.body.return_date,
        status:req.body.status
     }
        try{
                var insert=await No_Due.insertMany([nodues])
                res.send(insert)
            }
        catch(error){
            res.send(error.message);
        } 
     }
    const update=async(req,res)=>{
        const upd=await No_Due.findOne({$and:[{Reg_no:req.body.Reg_no},{req_material:req.body.req_material}]},{})
        // console.log(upd);
        if(upd.length<=0){
            return res.send("nodata");
        }
        else{
            const updateone=await No_Due.findOneAndUpdate({Reg_no:upd.Reg_no},{$set:{status:"No_due"}},{new:true})
            return res.send(updateone)
        }
    }

    
export{Nodue,update}