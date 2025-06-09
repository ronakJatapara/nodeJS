import React, { useState } from 'react';
import "../css/dashboard.css";
// import profileImage from '../assets/profile.jpg';F
import AllData from "../components/AllData"

function Dashboard() {
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
  <AllData></AllData>
  </>
  );
}

export default Dashboard;
