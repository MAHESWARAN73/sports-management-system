import React from 'react';
import { useState} from 'react';
import axios from "axios";

export default function StudentLogin(){
    const [values,setValues]=useState({stu_email:"",Password:""})
    // console.log(values);

    async function Login(e){
      e.preventDefault()
      const url="http://localhost:2050/api/studlogreg/log"
      await axios.post(url,{
        stu_email:values.stu_email,
        Password:values.Password,
      })
      .then(res=>{
        console.log(res.data);
      })
    }
    return(
        <>
        <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={(e) => setValues({...values, stu_email: e.target.value  })}></input> 
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"
           onChange={(e) => setValues({...values, Password: e.target.value})}></input>
        </div><br />
        <button className="btn btn-primary" onClick={Login}>Login</button>
        </form> 
       </>
    )
}