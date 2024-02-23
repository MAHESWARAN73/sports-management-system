
// import React from "react";
// import axios from "axios";
// import {HashRouter,Router,Link} from "react-router-dom";
// import { useState,useContext } from 'react';
// import { authContext } from "../authContext";
// import Moment from 'moment';
// export default function  GetAllView(){
//     const auth=useContext(authContext)
//     // console.log(auth.token)
//     const [values,setValues]=useState([])

//     async function handle(e){
//         e.preventDefault()

//         const url=`http://localhost:2050/api/event/getAlldata`
//         const headers = {
//           'Content-Type': 'application/json',
//           'x-auth':auth.token
//         }
//         await axios.get(url,{
//           headers: headers
//         })
     
//       .then(res=>{
//             setValues(res.data)
//             // console.log(res.data);
//       })
//       .catch(error=>{
//           alert(error.response)
//       })  
//       }
//     return(
//         <>
//             <button onClick={handle}>Submit</button>
//             <h2> Due's And No-Due's List</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Student Name</th>
//                   <th>Register Number</th>
//                   <th>Phone Number</th>
//                   <th>Requested Material</th>
//                   <th>Out Date</th>
//                   <th>Return Date</th>
//                   <th>Status</th>

//                 </tr>
//               </thead>
//             <tbody>
//               {values.map((emp,id)=>(
//                 <tr key={id}>
//                   <td>{id+1}</td>
//                   <td>{emp.stu_name}</td>
//                   <td>{emp.Reg_no}</td>
//                   <td>{emp.phn_number}</td>
//                   <td>{emp.req_material}</td>
//                   <td>{Moment(emp.out_date).format('YYYY-MM-DD')}</td>
//                   <td>{Moment(emp.return_date).format('YYYY-MM-DD')}</td>
//                   <td>{emp.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//         )
// }