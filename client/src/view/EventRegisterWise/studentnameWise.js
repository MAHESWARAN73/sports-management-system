import React from "react";
import axios from "axios";
import {HashRouter,Router,Link} from "react-router-dom";
import { useState,useContext } from 'react';
import { authContext } from "../../authContext";
import Moment from 'moment';



export default function StudentnameWise(){

    const auth=useContext(authContext)

    // console.log(auth.token)
    const [values,setValues]=useState({stu_name:""})
    const[click,setClick]=useState(false)
    const [result,setResult]=useState([])
    
    async  function handle(e){
        e.preventDefault()

        const url=`http://localhost:2050/api/regStu/stu_namewise/${values.stu_name}`
        const headers = {
          'Content-Type': 'application/json',
          'x-auth':auth.token
        }
        await axios.get(url,{
          headers: headers
        })
     
      .then(res=>{
            setResult(res.data)

            setClick(true)

            // console.log(res.data);
      })
      .catch(error=>{
          alert(error.response)
      })  
      }
    return(
        <>
        <form>
            <div>
                <label>Enter Student Name:</label>
                <input type="text" placeholder="Enter Student Name" 
                onChange={(e)=>setValues({...values,stu_name:e.target.value})}></input>
            </div><br /><br />
            <button type="Submit" onClick={handle}>submit</button>
        </form>
            
        {click===false?(null):(
            <div>
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
              {result.map((emp,id)=>(
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
            </div>
        )}
        </>
        )
}