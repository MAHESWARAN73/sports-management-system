import express from 'express'
import Bodyparser  from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import Register from "./router/staff.js";
import event from "./router/event.js"
import studreg from"./router/eventReg.js";
import stud from "./router/student.js"
import nodue from "./router/nodueform.js"
import material from "./router/material.js"

const app= express()
app.use(cors())
app.use(Bodyparser.json())
app.use(Bodyparser.text())
app.use(express.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.use("/api/reg",Register)
app.use("/api/event",event)
app.use("/api/regStu",studreg)
app.use("/api/studlogreg",stud)
app.use("/api/no-due",nodue)
app.use("/api/addmate",material)


mongoose.connect('mongodb://localhost:27017/CSM')
.then(()=>console.log('db is connected'))
.catch(()=>console.log('cannot connect db'))


app.listen(2050,()=>{
    console.log("server is running on 2050");
})
