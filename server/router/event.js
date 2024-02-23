import express from "express";
import auth from '../middleware/auth.js'
import Admin from "../middleware/Admin.js";
import { addEvent,viewEvent,allEvent ,eventDate, upCominEvent,viewbyname,
    to_dateWise,eve_placeview,eve_typeview} from "../controller/event.js";

const router=express.Router()

router.post("/addEvent",addEvent)
router.get("/upcoming",upCominEvent)
router.get("/getAlldata",allEvent)
router.get("/viewbyname/:eve_name",viewbyname)
router.get("/dateView/:from_date",viewEvent)
router.get("/to_dateWise/:to_date",to_dateWise)
router.get("/eventdate/:from_date/:to_date",eventDate)
router.get("/eve_placeview/:eve_place",eve_placeview)
router.get("/eve_typeview/:eve_type",eve_typeview)

export default router