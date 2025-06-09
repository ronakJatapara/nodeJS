import React, { useState } from 'react'
import {Link} from "react-router-dom"


function AllData() {

   const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
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

      {/* Main area */}
      <div className="main-area">

        {/* Top Navbar */}
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

        {/* Main content */}
        <main className="main-content">
          <section className="overview">
            <h2>Dashboard Overview</h2>

            <div className="cards">
              <div className="card">
                <h3>Users</h3>
                <p>1,234</p>
              </div>
              <div className="card">
                <h3>Sales</h3>
                <p>$12,345</p>
              </div>
              <div className="card">
                <h3>Performance</h3>
                <p>92%</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Details</h2>
            <p>This is your fresh new admin dashboard layout. Add charts, tables, and stats here.</p>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}

export default AllData
