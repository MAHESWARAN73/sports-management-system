import React from 'react';
import axios from "axios";
import {useState,useContext} from "react";
import { authContext } from "../authContext.js";
export default function StaffPostEvent(){
    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState({
        eve_name:"",
        eve_place:"",
        eve_type:"",
        from_date:"",
        to_date:"",
        organiser:"",
    })
    const data={
        eve_name:values.eve_name,
        eve_place:values.eve_place,
        eve_type:values.eve_type,
        from_date:values.from_date,
        to_date:values.to_date,
        organiser:values.organiser,
    }
    // console.log(values)
    async function handle(e){
        e.preventDefault()
        const url="http://localhost:2050/api/event/addEvent"
        const headers={
            'Accept':'application/json',
            'Content-Type':'application/json',
            'x-auth':auth.token
        }
        await axios.post(url,JSON.stringify(data),{
            headers:headers
        },{
            eve_name:data.eve_name,
            eve_place:data.eve_place,
            eve_type:data.eve_type,
            from_date:data.from_date,
            to_date:data.to_date,
            organiser:data.organiser,
        })
        .then(res=>{
            if(res.status===400){
            console.log("Sometrhing Went Wrong")
        }else{
            alert('Your Data Will Be Added')
            console.log(res.data)
        }
        })
        .catch(error=>{
            alert(error.response.data)
        })
    }
    function GoBack(){
        window.location.href="#/StaffWorks"
}
    return(
        <>
        <form>
            <div>
                <div><label>Enter Event Name:</label>
                    <input type="text" placeholder='Enter Event Name'
                    onChange={(e)=>setValues({...values,eve_name:e.target.value})}></input>
                </div>
                <div><label>Enter Event Place:</label>
                    <input type="text" placeholder='Enter Event Place'
                    onChange={(e)=>setValues({...values,eve_place:e.target.value})}></input>
                </div>
                <div><label>Enter Event Type:</label>
                <select onChange={(e)=>setValues({...values,eve_type:e.target.value})}>
                    <option>Select</option>
                    <option>solo</option>
                    <option>team</option>
                </select>
                </div>
                <div><label>Enter From Date:</label>
                    <input type="date" placeholder='Enter From Date'
                    onChange={(e)=>setValues({...values,from_date:e.target.value})}></input>
                </div>
                <div><label>Enter To Date:</label>
                    <input type="date" placeholder='Enter To Date'
                    onChange={(e)=>setValues({...values,to_date:e.target.value})}></input>
                </div>
                <div><label>Enter Organiser:</label>
                    <input type="text" placeholder='Enter Organiser'
                    onChange={(e)=>setValues({...values,organiser:e.target.value})}></input>
                </div>
            </div>
                <button type='submit' onClick={handle}>&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;</button>
                <button onClick={GoBack}>Go Back</button>
            {/* <HashRouter>
                <Link to="studentLogin"><button type="submit">&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</button></Link>
                <Route path="/studentLogin" component={StudentLogin}></Route>
            </HashRouter> */}
        </form>
        </>
    )
 }