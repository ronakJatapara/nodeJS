import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

function AddAdmin() {

   const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const [name,setName] =  useState("")
    const [email,setEmail] =  useState("")
    const [phone,setPhone] =  useState("")
    const [pass,setPass] =  useState("")
    const [role,setRole] =  useState("")



    const handleSubmit = (e)=>{
      e.preventDefault()

      let obj = {
        name,email,phone,pass,role
      }

      axios.post("http://localhost:2004/addAdmin",obj).then((res)=>{
        console.log(res);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
     
      
    }

  return (
    <>
        <div className="dashboard-wrapper">

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>AdminPanel</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
           
          </button>
        </div>
       <nav className="sidebar-nav">
  <Link to="/" className="nav-item">Dashboard</Link>
  <Link to="/addAdmin" className="nav-item">Add-Admin</Link>
  <Link to="/settings" className="nav-item">Settings</Link>
  <Link to="/reports" className="nav-item">Reports</Link>
</nav>

      </aside>

   
      <div className="main-area">

      
        <nav className="navbar">
          <div className="nav-left">
            <button className="sidebar-toggle-mobile" onClick={toggleSidebar}>
              ☰
            </button>
          </div>

          <div className="nav-right">
            <div className="profile" onClick={toggleDropdown}>
             
              <span className="profile-name">Admin</span>
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item logout">Logout</a>
              </div>
            )}
          </div>
        </nav>

           <h2>Add New Admin</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={name}   onChange={(e)=> setName(e.target.value)}/>
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input type="text" name="email" value={email}   onChange={(e)=> setEmail(e.target.value)}/>
              </div>

              <div className="form-group">
                <label>Phone:</label>
                <input type="text" name="phone" value={phone}  onChange={(e)=> setPhone(e.target.value)} />
              </div>
               <div className="form-group">
                <label>Password:</label>
                <input type="text" name="pass" value={pass} onChange={(e)=> setPass(e.target.value)}  />
              </div>

              <div className="form-group">
                <label>Role:</label>
                <select name="role" value={role} id="" onChange={(e)=> setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Add Admin</button>
            </form>

     
      </div>
    </div>
    </>
  )
}

export default AddAdmin
