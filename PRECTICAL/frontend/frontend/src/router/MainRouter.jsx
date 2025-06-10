import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "../component/Home"
import Form from '../component/form'


function MainRouter() {
  return (
 <>
 <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/Form' element={<Form></Form>}></Route>

 </Routes>
 </>
  )
}

export default MainRouter
