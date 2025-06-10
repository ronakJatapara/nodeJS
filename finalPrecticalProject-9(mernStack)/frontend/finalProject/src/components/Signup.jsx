import React from 'react'
import "../css/signup.css"
import { useState } from 'react'
import axios from "axios"

function Signup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignup = async (e)=>{
     e.preventDefault()

     let obj = {
        name,
        email,
        password
     }
    
   await axios.post("http://localhost:2004/register",obj).then((res)=>{
        console.log(res);
        
     })
     .catch((err)=>{
        console.log(err); 
     })

     
     
    }
  return (
    <>
      <div className="signup-container" style={{width:"400px"}}>
      <form className="signup-form" onSubmit={handleSignup} >
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" name="name" value={name} placeholder="Enter your full name"  onChange={(e)=>setName(e.target.value)}  />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="text" name="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>

       

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup
