import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";


const Form=()=>{

  const navigate=useNavigate();  //To redirect once the form is submitted

  //states
  const [fname,setFName]=useState("");
  const [lname,setLName]=useState("");
  const [email,setEmail]=useState("");
  const [dob,setDob]=useState("");
  const [num,setNum]=useState("");
  const [message,setMessage]=useState("");


    //post data to the server
    const postData=async(e)=>{
      const res=await fetch('https://calm-erin-bison-coat.cyclic.app',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          fname,
          lname,
          email,
          dob,
          num
        })
      });
      const data=await res.json();
      if(res.status===500){
        setMessage("Registration failed...Kindly Try Again!!");
        document.getElementById("msg").style.display="block";
       
      }else if(res.status===409){
        setMessage("user Already Exists!!...Try with a different email");
        document.getElementById("msg").style.display="block";
      }else{
        setMessage("Successfully Registered !!...")
        setFName("");
        setLName("");
        setEmail("");
        setDob("");
        setNum("");
        navigate("/all");
      }
    }


   
    //checking input...

    //check if email is valid
    const emailCheck=()=>{
      if(email.length>0){
        if(!email.includes("@")){
          return false;
        }
        else if(!email.includes(".")){
          return false;
        }
        else{return true;}
      }
    }

    //check if DOB is over 18 years
    const checkDob=()=>{
      const birth=new Date(dob);
      const today=new Date();
      const birthYear=birth.getFullYear();
      const year=today.getFullYear();
      const birthMonth=birth.getMonth();
      const month=today.getMonth();
      const birthDay=birth.getDate();
      const day=today.getDate();

      if(year-birthYear>18)return true;
      else if(year-birthYear<18)return false;
      else{
        if(month-birthMonth>0)return true;
        else if(month-birthMonth<0)return false;
        else{
          if(day-birthDay>=0)return true;
          return false;
        }
      }
    }

    //check number
    const checkNum=()=>{
      if(num.length<10){
        return false;
      }
      return true;
    }

    
  //form submit  
  const onSubmit=async(e)=>{
    if(emailCheck()===false){
      setMessage("Enter Valid Email")
      document.getElementById("msg").style.display="block"
    }
    else if(checkDob()===false){
      setMessage("Age must be greater than 18 years");
      document.getElementById("msg").style.display="block";
    }
    else if(checkNum()===false){
      setMessage("Enter valid Phone Number");
      document.getElementById("msg").style.display="block"
    }
    //when the form is valid
    else{
      await postData();
      
    }
  }

    return (
        <div className="form-container">  
        <div className="sign-up-form-container">
          <h1>StackFusion</h1>
          <p>Full Stack internship task. Rahul Solanki</p>
          <p id='msg'>{message ? `${message}`:null } <span onClick={()=>document.getElementById("msg").style.display="none"}>X</span></p>
          <form method="POST">
            <div className='name-input'>
              <input type="text" value={fname}  onChange={(e)=>setFName(e.target.value)} required={true} placeholder='First Name' />
              <input type="text" value={lname}  onChange={(e)=>setLName(e.target.value)} placeholder='Last Name' />
            </div>
            <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required={true} placeholder='Email' />
            <input type="date" value={dob}  required={true} onChange={(e)=>setDob(e.target.value)} placeholder='DOB' />
            <input   value={num} required={true} onChange={(e)=>setNum(e.target.value)} placeholder='10 Digit Phone Number' />
            <button type='button' id='submit' onClick={()=>onSubmit()}>GET STARTED</button>
          </form>
        </div>
      </div>
    )
}

export default Form;