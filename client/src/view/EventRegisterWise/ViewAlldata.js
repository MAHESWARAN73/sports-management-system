import React from "react";
import axios from "axios";
import {HashRouter,Router,Link} from "react-router-dom";
import { useState,useContext } from 'react';
import { authContext } from "../../authContext";
import Moment from 'moment';
export default function ViewAllData(){
    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState([])
    async  function handle(e){
        e.preventDefault()

        const url=`
        http://localhost:2050/api/regStu/datas`
        const headers = {
          'Content-Type': 'application/json',
          'x-auth':auth.token
        }
        await axios.get(url,{
          headers: headers
        })
     
      .then(res=>{
            setValues(res.data)
            // console.log(res.data);
      })
      .catch(error=>{
          alert(error.response)
      })  
      }
    return(
        <>
            <button onClick={handle}>Submit</button>
            <h2> Student List</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Stud.Name</th>
                  <th>Department</th>
                  <th>Course</th>
                  <th>Event.Name</th>
                  <th>Event Start Date</th>
                  <th>Phone.No</th>

                </tr>
              </thead>
            <tbody>
              {values.map((emp,id)=>(
                <tr key={id}>
                  <td>{id+1}</td>
                  <td>{emp.stu_name}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.course}</td>
                  <td>{emp.event.eve_name}</td>
                  <td>{Moment(emp.event.from_date).format('YYYY-MM-DD')}</td>
                  <td>{emp.phone_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
        )
}