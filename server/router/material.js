import express from "express";
import { material,allMaterial,alldatamaterial,statuswise,stu_namewise,
    Reg_nowise,materialwise,out_datewise,return_dateWise} from "../controller/material.js";

import auth from '../middleware/auth.js'
import Admin from "../middleware/Admin.js";
const router=express.Router()

router.post("/addmaterial",[auth,Admin],material)

router.post("/regmaterial",[auth,Admin],allMaterial)

router.get("/allmaterial",[auth,Admin],alldatamaterial)

router.get("/statuswise",[auth,Admin],statuswise)

router.get("/stu_namewise",[auth,Admin],stu_namewise)

router.get("/Reg_nowise",[auth,Admin],Reg_nowise)

router.get("/materialwise",[auth,Admin],materialwise)

router.get("/out_datewise",[auth,Admin],out_datewise)

router.get("/return_dateWise",[auth,Admin],return_dateWise)


export default router