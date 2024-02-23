import express from "express";
import { addData,viewbyevent,stu_namewise,deptwise,courseWise } from "../controller/eventreg.js";
import {View} from "../controller/eventreg.js"
import auth from '../middleware/auth.js'
import Admin from "../middleware/Admin.js";
const router=express.Router()

router.post("/Students",addData)

router.get("/datas",[auth,Admin],View)

router.get('/getbyevent/:eve_name',[auth,Admin],viewbyevent)

router.get('/stu_namewise/:stu_name',[auth,Admin],stu_namewise)

router.get('/deptwise/:dept',[auth,Admin],deptwise)

router.get('/courseWise/:course',[auth,Admin],courseWise)


export default router