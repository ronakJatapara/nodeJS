import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './login'
import Register from './register'

function MainRouter() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}

export default MainRouter
