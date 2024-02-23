import React from 'react'
// import  {AuthContext} from './context'
import {HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import StudentLogin from './CSM_Profiles/studentLogin'
import Header from './Header/header'
import Admin from './CSM_Profiles/AdminLogin.js'
import axios from "axios"
import { authContext } from '../src/authContext'
import AdminRegister from './CSM_Profiles/AdminRegister'
import StudentReg from "./CSM_Profiles/studentReg.js"
import ViewAllData from './view/EventRegisterWise/ViewAlldata'
import StaffPostEvent from './CSM_Profiles/staffpostEvent';
import studentnameWise from "./view/EventRegisterWise/studentnameWise"
import StudenteventRegister from './CSM_Profiles/StudenteventRegister'
import StudentnameWise from './view/EventRegisterWise/studentnameWise'
import DepartmentWise from './view/EventRegisterWise/DepartmentWise'
import CourseWise from './view/EventRegisterWise/CourseWise'
import EvenameWise from './view/EventRegisterWise/EventnameWise'
import GetAllData from './view/eventWise/GetAllEvent'
import FromDateWise from './view/eventWise/FromDate'
import ToDateWise from './view/eventWise/ToDate'
import FromAndToDate from './view/eventWise/FromAndToDate'
import LocationEvent from './view/eventWise/LocationEvent'
import EventTypeWise from './view/eventWise/EventType'
import UpcommingEvent from './view/eventWise/UpcommingEvent'
import NoDuePost from './No-Due/NoduePost'
import NoDueUpdate from './No-Due/NoDueUpdate'
import GetAllView from './NodueView/GetAllView'
import StudentNav from './Header/StudentNav'
import AdminNav from './Header/AdminNav'
import StaffWorks from './Header/StaffWorks'
import Evename from './view/eventWise/EventName'
import EventNav from './Header/EventNav'
export default function App(){
    let style={
    backgroundImage: "url('https://www.iismworld.com/wp-content/uploads/2019/03/Blog-4.jpg')",
 height:'800px',
    width:'100%',
   paddingTop:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}
  return(
    <>
        <h1 className='heading'>SPORTS MANAGEMENT SYSTEM</h1>
        <HashRouter>
          <Header />
          <authContext.Provider value={{token:null}} >
          <Routes>
          {/* 1 navs */}
          <Route path="/StudentNav" element={<StudentNav />}></Route>
          <Route path="/AdminNav" element={<AdminNav />}></Route>
          <Route path='/EventNav' element={<EventNav />}></Route>
          {/*2*/}
          <Route path="/StaffWorks" element={<StaffWorks />}></Route>
          <Route path="/studentReg" element={<StudentReg />}></Route>
          <Route path='/studentLogin' element={<StudentLogin />}></Route>
          <Route path="/StudenteventRegister" element={<StudenteventRegister />}></Route>
          <Route path='/AdminRegister' element={<AdminRegister />}></Route>
          <Route path='/AdminLogin' element={<Admin />}></Route>
          <Route path='/staffpostEvent' element={<StaffPostEvent />}></Route>
          <Route path="/ViewAllData" element={<ViewAllData />}></Route>
          <Route path="/studentnameWise" element={<StudentnameWise />}></Route>
          <Route path='/DepartmentWise' element={<DepartmentWise />}></Route>
          <Route path="/CourseWise" element={<CourseWise />}></Route>
          <Route path="/EventnameWise" element={<EvenameWise />}></Route>
          <Route path='/GetAllEvent'  element={<GetAllData />}></Route>
          <Route path='/FromDate'  element={<FromDateWise />}></Route>
          <Route path='/ToDate'  element={<ToDateWise />}></Route>
          <Route path="/FromAndToDate" element={<FromAndToDate />}></Route>
          <Route path="/LocationEvent" element={<LocationEvent />}></Route>
          <Route path="/EventType" element={<EventTypeWise />}></Route>
          <Route path='/UpcommingEvent' element={<UpcommingEvent />}></Route>
          <Route path="/NoduePost" element={<NoDuePost />}></Route>
          <Route path='/NoDueUpdate' element={<NoDueUpdate />}></Route>
          <Route path="/GetAllView" element={<GetAllView />}></Route>
          <Route path='/EventName' element={<Evename />}></Route>
          </Routes>
          </authContext.Provider>
        </HashRouter>
         <div style={style}>
     </div>
        </>     
  )
}