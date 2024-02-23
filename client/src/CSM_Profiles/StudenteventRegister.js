import React from 'react';
import axios from "axios";
import {useState,useContext} from "react"
import { authContext } from '../authContext';

 export default function StudenteventRegister(){
    const auth=useContext(authContext)

    const [values,setValues]=useState({
        stu_name:"",
        RegNo:"",
        dept:"",
        course:"",
        eve_name:"",
        phone_no:""
    })
    const data={
        stu_name:values.stu_name,
        RegNo:values.RegNo,
        dept:values.dept,
        course:values.course,
        eve_name:values.eve_name,
        phone_no:values.phone_no
    }
    async function handle(e){        
        e.preventDefault()
        const url="http://localhost:2050/api/regStu/Students"
        await axios.post(url,{
            stu_name:data.stu_name,
            RegNo:data.RegNo,
            dept:data.dept,
            course:data.course,
            eve_name:data.eve_name,
            phone_no:data.phone_no
    })
    .then(res=>{
            if(res.status===400){
            console.log(res.data)
        }else{
            alert('done')
            console.log(res.data)
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
                <div><label>Enter Your Register Number:</label>
                    <input type="text" placeholder='Enter Your Register Number'
                    onChange={(e)=>setValues({...values,RegNo:e.target.value})}></input>
                </div>
                <div><label>Enter Your Department:</label>
                    <input type="text" placeholder='Enter Your Dept'
                    onChange={(e)=>setValues({...values,dept:e.target.value})}></input>
                </div>
                <div><label>Enter Your Course:</label>
                    <input type="text" placeholder='Enter Your Course'
                    onChange={(e)=>setValues({...values,course:e.target.value})}></input>
                </div>
                <div><label>Select Your Event Name:</label>
                    <select onChange={(e)=>setValues({...values,eve_name:e.target.value})}>
                        <option>Your Event Name</option>
                        <option>Athletics</option>
                        <option>Basket Ball</option>
                        <option>Cricket</option>
                        <option>DeadLift</option>
                        <option>Golf</option>
                        <option>Harmer Throw</option>
                    </select>
                </div>
                <div><label>Enter Your Phone Number:</label>
                    <input type="number" placeholder='Enter Your Phone Number'
                    onChange={(e)=>setValues({...values,phone_no:e.target.value})}></input>
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