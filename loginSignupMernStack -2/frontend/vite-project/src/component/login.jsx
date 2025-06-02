import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
    const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    let obj={
      email,
      pass
    }
  await axios.post("http://localhost:2004/login",obj)
  .then((res)=>{
    alert(res.data.msg);
        if(res.data.code == 100){
          navigate("/register")
        }else if(res.data.code == 200){
          localStorage.setItem("token",res.data.token)
          navigate("/dashboard");
        }else{
          navigate("/");
        }
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
    
    
  }
  return (
    <>
     <form action="" onSubmit={handleSubmit}>
      <input type="text" name="email" id="" placeholder='email' onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" name="pass" id="" placeholder='password' onChange={(e)=> setPass(e.target.value)} />
      <br />
      <button type='submit'>login</button>
     </form>
     <Link to={"/register"}>Register?</Link>
    </>
  )
}

export default Login
