import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "../component/Home"
function MainRouter() {
  return (
 <>
 <Routes>
    <Route path='/' element={<Home></Home>}></Route>
 </Routes>
 </>
  )
}

export default MainRouter
