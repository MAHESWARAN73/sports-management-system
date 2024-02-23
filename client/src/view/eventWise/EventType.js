import React from "react";
import axios from "axios";
import {HashRouter,Router,Link} from "react-router-dom";
import { useState,useContext } from 'react';
import { authContext } from "../../authContext";
import Moment from 'moment';

export default function EventTypeWise(){

    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState({eve_type:""})
    const[click,setClick]=useState(false)
    const [result,setResult]=useState({})
    
    async  function handle(e){
        e.preventDefault()
        const url=`http://localhost:2050/api/event/eve_typeview/${values.eve_type}`
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
      // console.log(values.eve_type);
    //   console.log(result);
    function GoBack(){
      window.location.href="#/EventNav"
}
    return(
        <>
        <form>
            <div>
                <label>Select Event Type:</label>
                <select onChange={(e)=>setValues({...values,eve_type:e.target.value})}>
                    <option>Select</option>
                    <option>solo</option>
                    <option>team</option>
                </select>
            </div><br /><br />
            <button type="Submit" onClick={handle}>submit</button>
            <button onClick={GoBack}>Go Back</button>
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