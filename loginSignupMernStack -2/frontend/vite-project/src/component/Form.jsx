import React, { useState } from 'react'
import "./form.css"
import axios from 'axios'



function Form() {

    const [name,setName]=useState("")
    const [std,setStd]=useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let obj = {
            name,
            std
        }
       
      await axios.post("http://localhost:2004/addData",obj)
        .then((res)=>{
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
        

    }

  return (
    <>
      <form method='post' onSubmit={handleSubmit} >
    <label for="name">Student Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter student name"  onChange={(e)=> setName(e.target.value)} />

    <label for="standard">Standard:</label>
    <select id="standard" name="standard" onChange={(e)=> setStd(e.target.value)}>
      <option value="">Select standard</option>
      <option value="1">1st</option>
      <option value="2">2nd</option>
      <option value="3">3rd</option>
      <option value="4">4th</option>
      <option value="5">5th</option>
      
    </select>

    <button type="submit">Submit</button>
  </form>
    </>
  )
}

export default Form
