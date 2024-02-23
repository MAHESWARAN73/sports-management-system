import React from 'react';
import axios from "axios";
import {useState} from "react";
export default function AdminRegister(){
    const[values,setValues]=useState({
        s_name:"",
        email:"",
        password:"",
})
    const data={
        s_name:values.s_name,
        email:values.email,
        password:values.password
    }
    async function handle(e){
        e.preventDefault()
        const url="http://localhost:2050/api/reg/register"
        axios.post(url,{
            s_name:data.s_name,
            email:data.email,
            password:data.password
        })
        .then(res=>{
            if(res.status===400){
                console.log("Something Went Wrong");
            }else{
                alert("Registered Successfully");
                console.log(res.data);
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
                <label>Staff Name:</label>
                <input type="text" placeholder='Enter Youer Name'
                onChange={(e)=>setValues({...values,s_name:e.target.value})}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email"
                onChange={(e)=>setValues({...values,email:e.target.value})}></input>
            </div>
            <div>
                <label>Password</label>
                <input password="password" placeholder="Enter Your Password"
                onChange={(e)=>setValues({...values,password:e.target.value})}></input>
            </div>
            <button type="submit" onClick={handle} >Submit</button>
                <button onClick={GoBack}>Go Back</button>
        </form>
        </>
    )
}