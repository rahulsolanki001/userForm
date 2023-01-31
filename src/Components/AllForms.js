import { useState,useEffect } from "react";
import "./AllForms.css";
import { Link } from "react-router-dom";


const AllForms=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        const getData=async()=>{
            const res=await fetch("https://calm-erin-bison-coat.cyclic.app/");
            const data=await res.json();
            setData(data)
        }
        getData();
    },[]);
    return(
        <>
        <Link to="/"><button id="back">Go Back</button></Link>
        {data.length >0 ?
             <table>
             <thead>
                 <tr>
                     <td>No.</td>
                     <td>Name</td>
                     <td>Email</td>
                     <td>Date of Birth</td>
                     <td>Phone</td>
                 </tr>
             </thead>
             <tbody>
             {data.map((user,id)=>(
                 <tr key={id}>
                 <td>{id+1}</td>
                 <td>{user.fname + user.lname}</td>
                 <td>{user.email}</td>
                 <td>{user.dob}</td>
                 <td>{user.num}</td>
                 </tr>
         ))}
             </tbody>
         </table>
        : 
        <p>Loading...</p> }
       
        
        </>
    )
};

export default AllForms;