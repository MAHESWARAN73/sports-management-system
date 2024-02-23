
import express from 'express'
import { Register,Login} from '../controller/student.js'
import auth from '../middleware/auth.js'
import Admin from '../middleware/Admin.js'

const router=express.Router()

router.post('/Register',Register)

router.post('/log',Login)

export default router