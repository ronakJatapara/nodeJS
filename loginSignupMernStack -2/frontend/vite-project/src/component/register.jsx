import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Register() {
 
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    let navigate = useNavigate()

    const handleSubmit = async (e)=>{
     
        e.preventDefault()
        let obj = {
            name,
            email,
            pass
        }
         
        await axios.post("http://localhost:2004/register",obj)
        .then((res)=>{
         console.log(res.data.msg);
       navigate("/")
         
        })
        .catch((err)=>{
            console.log(err);
            
        })

        

    }

  return (
    <>
      <form action=""onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' value={name} name="" id="" onChange={(e)=> setName(e.target.value)} />
      <input type="text" placeholder='Email'value={email} name="" id="" onChange={(e)=> setEmail(e.target.value)} />
      <input type="text" placeholder='Password' value={pass} name="" id="" onChange={(e)=> setPass(e.target.value)} />
      <br /><br />
      <button>Submit</button>
      </form>
    </>
  )
}

export default Register
