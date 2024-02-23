import React from 'react';
import { useState,useContext} from 'react';
import axios from 'axios'
import { authContext } from '../authContext';

export default function Admin(){
    const [values,setValues]=useState({email:"",password:""})
    let token=useContext(authContext)
    async function Login(e){
        e.preventDefault()
        alert("Login Successfully")
        const url="http://localhost:2050/api/reg/login"
        await axios.post(url,{
            email:values.email,
            password:values.password,
        }
    )
    .then(res=>{
        // console.log(res.data);
        token.token=res.data
        window.location.href="#/StaffWorks"
        console.log(token);
    })
    .catch(err=>{
        console.log(err.message);
    })
    }
    return(
        <>
        <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={(e) => setValues({...values, email: e.target.value})}></input> 
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"
           onChange={(e) => setValues({...values, password: e.target.value})}></input>
        </div><br />
        <button type="submit" className="btn btn-primary" onClick={Login}>Login</button>
        </form>  
       </>
    )
}