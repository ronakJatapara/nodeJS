import React from 'react'
import { Route,Routes} from "react-router-dom"
import Login from './login'
import Register from './register'
import Dashboard from './dashboard'
import Form from './Form'

function MainRouter() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/Form' element={<Form></Form>}></Route>
      </Routes>
    </>
  )
}

export default MainRouter
