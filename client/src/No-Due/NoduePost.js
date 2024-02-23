import React from 'react';
import axios from "axios";
import {useState,useContext} from "react";
import { authContext } from "../authContext.js";
export default function NoDuePost(){
    const auth=useContext(authContext)
    // console.log(auth.token)
    const [values,setValues]=useState({
        stu_name:"",
        Reg_no:"",
        phn_number:"",
        req_material:"",
        return_date:"",
        status:"",
    })
    const data={
        stu_name:values.stu_name,
        Reg_no:values.Reg_no,
        phn_number:values.phn_number,
        req_material:values.req_material,
        out_date:values.out_date,
        return_date:values.return_date,
        status:values.status,
    }
    // console.log(values)
    async function handle(e){
        e.preventDefault()
        const url="http://localhost:2050/api/no-due/nodue"
        const headers={
            'Accept':'application/json',
            'Content-Type':'application/json',
            'x-auth':auth.token
        }
        await axios.post(url,JSON.stringify(data),{
            headers:headers
        },{
            stu_name:data.stu_name,
            Reg_no:data.Reg_no,
            phn_number:data.phn_number,
            req_material:data.req_material,
            out_date:data.out_date,
            return_date:data.return_date,
            status:data.status,
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
                <div><label>Enter Student Name:</label>
                    <input type="text" placeholder='Enter Student Name'
                    onChange={(e)=>setValues({...values,stu_name:e.target.value})}></input>
                </div>
                <div><label>Enter Register Number:</label>
                    <input type="text" placeholder='Enter Register Number'
                    onChange={(e)=>setValues({...values,Reg_no:e.target.value})}></input>
                </div>
                <div><label>Enter Your Phone Number:</label>
                    <input type="number" placeholder='Enter Your Phone Number'
                    onChange={(e)=>setValues({...values,phn_number:e.target.value})}></input>
                </div>
                </div>
                <div><label>Enter Your Request Material:</label>
                    <input type="text" placeholder='Enter Your Request Material'
                    onChange={(e)=>setValues({...values,req_material:e.target.value})}></input>
                </div>
                <div><label>Enter Out Date:</label>
                    <input type="date" placeholder='Enter Out Date'
                    onChange={(e)=>setValues({...values,out_date:e.target.value})}></input>
                </div>
                <div><label>Enter Return Date:</label>
                    <input type="date" placeholder='Enter Return Date'
                    onChange={(e)=>setValues({...values,return_date:e.target.value})}></input>
                </div>
                <div><label>Enter status:</label>
                <select onChange={(e)=>setValues({...values,status:e.target.value})}>
                    <option>Select</option>
                    <option>Due</option>
                    <option>No_due</option>
                </select>
                </div>
                <button type='submit' onClick={handle}>&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;</button>
                <button onClick={GoBack}>GoBack</button>
            {/* <HashRouter>
                <Link to="studentLogin"><button type="submit">&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</button></Link>
                <Route path="/studentLogin" component={StudentLogin}></Route>
            </HashRouter> */}
        </form>
        </>
    )
 }