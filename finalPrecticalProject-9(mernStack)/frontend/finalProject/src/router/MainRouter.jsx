import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from '../components/Login'
import Signup from '../components/Signup'

function MainRouter() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login></Login>} ></Route>
      <Route path="/signup" element={<Signup></Signup>} ></Route>
      </Routes>
    </>
  )
}

export default MainRouter
