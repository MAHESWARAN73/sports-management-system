import bcrypt from "bcrypt";
import env from "dotenv/config";
import jwt from "jsonwebtoken";
import Material from "../schema/material.js";
import No_Due from "../schema/nodueForm.js"

const material=async(req,res)=>{
    const findmaterial=await Material.find({e_name:req.body.e_name})
    let data={
        material_name:req.body.material_name,
        material_brand:req.body.material_brand,
        material_stock:req.body.material_stock,
        material_use:req.body.material_use,
    }

        try{
                var insert=await Material.insertMany([data])
                res.send(insert)
            }
        catch(error){
            res.send(error.message);
        } 
    }
    // ~~~~~~~~~~~staff entry given a material for students~~~~~~~~~~~~ //
    const allMaterial=async(req,res)=>{
        try{
          const view=await Material.find({material_name:req.body.material_name})
          if(view.length<=0)return res.status(400).send("No material")
          let stock=view[0].material_stock
        //   console.log(stock);
        //   console.log(view[0].material_stock);
        if(stock<=0)return res.status(400).send("Out Of Stock")
        let nodues={
            stu_name:req.body.stu_name,
            Reg_no:req.body.Reg_no,
            phn_number:req.body.phn_number,
            req_material:view[0].material_name,
            out_date:req.body.out_date,
            return_date:req.body.return_date,
            status:req.body.status
        }
        var insert=await No_Due.insertMany([nodues])
        res.send(insert)
        // console.log(stock);
        }catch(error){
          res.status(400).send(error.message)
        }
    }
    //get all data due or nodue//
    const alldatamaterial=async(req,res)=>{
        try{
          const view=await No_Due.find()
          res.send(view)
      
        }catch(error){
          res.status(400).send(error.message)
        }
    }

    //status wise get datas//
    const statuswise=async(req,res)=>{
        try{
          const view=await No_Due.find({status:req.body.status})
          res.send(view)
      
        }catch(error){
          res.status(400).send(error.message)
        }
    }
    //stu_name wise get data//
    const stu_namewise=async(req,res)=>{
        try{
          const view=await No_Due.find({stu_name:req.body.stu_name})
          res.send(view)
      
        }catch(error){
          res.status(400).send(error.message)
        }
    }
    //Reg_nowise///
    const Reg_nowise=async(req,res)=>{
        try{
          const view=await No_Due.find({Reg_no:req.body.Reg_no})
          res.send(view)
      
        }catch(error){
          res.status(400).send(error.message)
        }
    }
    //req_materialwise//
    const materialwise=async(req,res)=>{
        try{
          const view=await No_Due.find({req_material:req.body.req_material})
          res.send(view)
      
        }catch(error){
          res.status(400).send(error.message)
        }
    }
    //out_datewise//
    const out_datewise=async(req,res)=>{
      try{
        const view=await No_Due.find({out_date:req.body.out_date})
        res.send(view)
    
      }catch(error){
        res.status(400).send(error.message)
      }
  }
  //return_dateWise//
  const return_dateWise=async(req,res)=>{
    try{
      const view=await No_Due.find({return_date:req.body.return_date})
      res.send(view)
  
    }catch(error){
      res.status(400).send(error.message)
    }
}
export {material,allMaterial,alldatamaterial,statuswise,stu_namewise,Reg_nowise,materialwise,out_datewise,return_dateWise}