import React from "react";
import axios from "axios";
import {HashRouter,Router,Link} from "react-router-dom";
import { useState,useContext } from 'react';
import { authContext } from "../../authContext";
import Moment from 'moment';

export default function FromDateWise(){

    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState({from_date:""})
    const[click,setClick]=useState(false)
    const [result,setResult]=useState([])
    
    async  function handle(e){
        e.preventDefault()
        const url=`http://localhost:2050/api/event/dateView/${values.from_date}`
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
      function GoBack(){
        window.location.href="#/EventNav"
      }
    //   console.log(result);
    return(
        <>
        <form>
            <div>
                <label>Enter From Date:</label>
                <input type="text" placeholder="Enter From Date" 
                onChange={(e)=>setValues({...values,from_date:e.target.value})}></input>
            </div><br /><br />
            <button type="Submit" onClick={handle}>submit</button>
            <button onClick={GoBack}>GoBack</button>
        </form>
            
        {click===false?(null):(
            <div>
            <h2> Events List</h2>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Event Name</th>
                  <th>Event Place</th>
                  <th>Event Type</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Organiser</th>

                </tr>
              </thead>
            <tbody>
              {result.map((emp,id)=>(
                <tr key={id}>
                  <td>{id+1}</td>
                  <td>{emp.eve_name}</td>
                  <td>{emp.eve_place}</td>
                  <td>{emp.eve_type}</td>
                  <td>{Moment(emp.from_date).format('YYYY-MM-DD')}</td>
                  <td>{Moment(emp.to_date).format('YYYY-MM-DD')}</td>
                  <td>{emp.organiser}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
        )}
        </>
        )
}