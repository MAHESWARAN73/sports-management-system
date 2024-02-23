import React from 'react';
import axios from "axios";
import {useState,useContext} from "react";
import { authContext } from "../authContext.js";
export default function NoDueUpdate(){
    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState({
        Reg_no:"",
        req_material:"",
    })
    const data={
        Reg_no:values.Reg_no,
        req_material:values.req_material,
    }
    // console.log(values)
    async function handle(e){
        e.preventDefault()
        const url="http://localhost:2050/api/no-due/nodue-update"
        const headers={
            'Accept':'application/json',
            'Content-Type':'application/json',
            'x-auth':auth.token
        }
        await axios.put(url,JSON.stringify(data),{
            headers:headers
        },{
            Reg_no:data.Reg_no,
            req_material:data.req_material,
        })
        .then(res=>{
            if(res.status===400){
            console.log("Sorry Cant Update Try Again")
        }else{
            alert('Your Due Will Be Updated')
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
                <div><label>Enter Register Number:</label>
                    <input type="text" placeholder='Enter Register Number'
                    onChange={(e)=>setValues({...values,Reg_no:e.target.value})}></input>
                </div>
                <div><label>Enter Your Request Material:</label>
                    <input type="text" placeholder='Enter Your Request Material'
                    onChange={(e)=>setValues({...values,req_material:e.target.value})}></input>
                </div>
            </div>
                <button type='submit' onClick={handle}>&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;</button>
                <button onClick={GoBack}>Go Back</button>
        </form>
        </>
    )
 }