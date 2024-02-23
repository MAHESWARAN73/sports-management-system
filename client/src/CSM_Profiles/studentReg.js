import React from 'react';
import axios from "axios";
import {useState,useEffect} from "react"
import {HashRouter,Link,Route} from "react-router-dom"
import StudentLogin from './studentLogin.js';
 export default function StudentReg(){
    try {
        
    } catch (error) {
        console.log(error.message);
    }
    const [values,setValues]=useState({stu_name:"",stu_email:"",Password:"",Batch:"",Dept:"",Course:"",Section:"",RegNo:""})
    const data={
        stu_name:values.stu_name,
        stu_email:values.stu_email,
        Password:values.Password,
        Batch:values.Batch,
        Dept:values.Dept,
        Course:values.Course,
        Section:values.Section,
        RegNo:values.RegNo
    } 
    async function handle(e){
        e.preventDefault()
        const url="http://localhost:2050/api/studlogreg/Register"
        await axios.post(url,{
            stu_name:data.stu_name,
            stu_email:data.stu_email,
            Password:data.Password,
            Batch:data.Batch,
            Dept:data.Dept,
            Course:data.Course,
            Section:data.Section,
            RegNo:data.RegNo
        })
        .then(res=>{
            if(res.status===400){
            console.log("Sometrhing Went Wrong")
        }else{
            alert('Successfully Registered')
            console.log(res.data)
            window.location.href="#/studentLogin"

        }
        })
        .catch(error=>{
            alert(error.response.data)
        })
    }
    return(
        <>
        <form>
            <div>
                <div><label>Enter Your Name:</label>
                    <input type="text" placeholder='Enter Your Name'
                    onChange={(e)=>setValues({...values,stu_name:e.target.value})}></input>
                </div>
                <div><label>Enter Your Email:</label>
                    <input type="email" placeholder='Enter Your Email'
                    onChange={(e)=>setValues({...values,stu_email:e.target.value})}></input>
                </div>
                <div><label>Enter Your Password:</label>
                    <input type="password" placeholder='Enter Your Password'
                    onChange={(e)=>setValues({...values,Password:e.target.value})}></input>
                </div>
                <div><label>Enter Your Batch:</label>
                    <input type="text" placeholder='Enter Your Batch'
                    onChange={(e)=>setValues({...values,Batch:e.target.value})}></input>
                </div>
                <div><label>Enter Your Department:</label>
                    <input type="text" placeholder='Enter Your Dept'
                    onChange={(e)=>setValues({...values,Dept:e.target.value})}></input>
                </div>
                <div><label>Enter Your Course:</label>
                    <input type="text" placeholder='Enter Your Course'
                    onChange={(e)=>setValues({...values,Course:e.target.value})}></input>
                </div>
                <div><label>Enter Your Section:</label>
                    <input type="text" placeholder='Enter Your Section'
                    onChange={(e)=>setValues({...values,Section:e.target.value})}></input>
                </div>
                <div><label>Enter Your Register Number:</label>
                    <input type="text" placeholder='Enter Your Register Number'
                    onChange={(e)=>setValues({...values,RegNo:e.target.value})}></input>
                </div>
            </div>
                <button type='submit' onClick={handle}>&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;</button>
            {/* <HashRouter>
                <Link to="studentLogin"><button type="submit">&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</button></Link>
                <Route path="/studentLogin" component={StudentLogin}></Route>
            </HashRouter> */}
        </form>
        </>
    )
 }