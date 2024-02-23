import React from "react";
import Nav from 'react-bootstrap/Nav'
import "../css/navheader.css"
export default function EventNav(){
    return(
        <>
        <Nav>
            <Nav.Link href="#/GetAllEvent">Get All Data</Nav.Link><br />
            <Nav.Link href="#/FromDate">From Date</Nav.Link><br />
            <Nav.Link href="#/ToDate">To Date</Nav.Link><br />
            <Nav.Link href="#/FromAndToDate">From And To Date</Nav.Link><br />
            <Nav.Link href="#/LocationEvent">Event Location</Nav.Link><br />
            <Nav.Link href="#/EventType">Event Type</Nav.Link><br />
            <Nav.Link href="#/UpcommingEvent">Upcomming Event List</Nav.Link><br />
            <Nav.Link href="#/EventName">Evename:</Nav.Link>
            {/* <Nav.Link href="#/StudentReg">Student Register</Nav.Link> */}
            {/* <Nav.Link href="#/studentLogin">Student Login</Nav.Link><br /> */}
            {/* <Nav.Link href="#/AdminRegister">AdminRegister</Nav.Link> */}
            {/* <Nav.Link href="#/AdminLogin">Admin Login</Nav.Link> <br /> */}
            {/* <Nav.Link href="#/staffpostEvent">Post Event</Nav.Link><br /> */}
            {/* <Nav.Link href="#/NoduePost">No-Due Post</Nav.Link><br /> */}
            {/* <Nav.Link href="#/StudenteventRegister">StudenteventRegister</Nav.Link><br /> */}
            {/* <Nav.Link href="#/studentnameWise">StudentnameWise</Nav.Link><br /> */}
            {/* <Nav.Link href="#/DepartmentWise">DepartmentWise</Nav.Link><br /> */}
            {/* <Nav.Link href="#/CourseWise"> CourseWise</Nav.Link> <br /> */}
            {/* <Nav.Link href="#/EventnameWise">EventnameWise</Nav.Link> <br /> */}
            {/* <Nav.Link href="#/ViewAllData">View All Data</Nav.Link><br /> */}
            {/* <Nav.Link href="#/NoDueUpdate">No-Due Update:</Nav.Link><br /> */}
            {/* <Nav.Link href="#/GetAllView">Due And No-Due's List:</Nav.Link><br /> */}
        </Nav>
        </>
    )
}