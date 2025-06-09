import React from 'react'
import "../css/login.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from '../components/Signup'


function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault()

        let obj = {
            email,
            password
        }

        
        
    }


  return (
    <>
     <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}     placeholder="Enter your email"  />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter your password"  />
        </div>

        <button type="submit" className="login-button">Login</button>
        <Link to="/signup">Register</Link>
      </form>
    </div>
    </>
  )
}

export default Login
