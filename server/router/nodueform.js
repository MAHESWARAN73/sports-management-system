import express from "express";
import { Nodue,update,} from "../controller/nodueform.js";

import auth from '../middleware/auth.js'
import Admin from "../middleware/Admin.js";
const router=express.Router()

router.post("/nodue",Nodue)
router.put("/nodue-update",update)

export default router