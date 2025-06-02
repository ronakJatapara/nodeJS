import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  let navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token"))
    {
      navigate("/")
    }
  },[])
  return (
    <>
       <h1>Dashboard</h1>
      <button onClick={()=>navigate("/")}>LogOut</button>
    </>
  )
}

export default Dashboard
