import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from '../components/Login'
import Signup from '../components/Signup'
import Home from '../components/Home'
import AddData from '../components/AddData'

function MainRouter() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login></Login>} ></Route>
      <Route path="/signup" element={<Signup></Signup>} ></Route>
      <Route path="/home" element={<Home></Home>} ></Route>
      <Route path="/addData" element={<AddData></AddData>} ></Route>
      </Routes>
    </>
  )
}

export default MainRouter
