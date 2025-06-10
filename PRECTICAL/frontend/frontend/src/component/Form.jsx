import React, { useState } from 'react'
import axios from 'axios'
import "./form.css"

function Form() {

  const [name,setName] = useState("")
  const [gerne,setGerne] = useState("")
  const [arr,setArr]= useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()

    let obj={
      name,
      gerne
    }

    setArr([...arr,obj])
    
    
    
    
  axios.post("http://localhost:2004/Form",obj)
  .then((res) => {
    console.log("Data sent to MongoDB successfully!",res.data);

    setName("");
    setGerne("");
  })
  .catch((err) => {
    console.error("Error sending data to MongoDB:", err);
  });

    
    
  }


  return (
    <>
      <div className="form-container">
        <h2>Movie Form</h2>
        <form action="/submit-movie" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="movieName">Movie Name:</label>
          <input type="text" id="movieName" value={name} name="movieName" required onChange={(e)=> setName(e.target.value)} />

          <label htmlFor="movieType">Movie Type:</label>
          <select id="movieType" value={gerne} name="movieType" onChange={(e)=> setGerne(e.target.value)} required>
            <option value="">-- Select Genre --</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romantic">Romantic</option>
            <option value="Thriller">Thriller</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form
