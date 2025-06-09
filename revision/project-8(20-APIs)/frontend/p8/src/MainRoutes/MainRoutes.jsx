import React from 'react'
import {  Routes , Route  } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import AllData from '../components/AllData'
import AddAdmin from '../components/AddAdmin'

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/addAdmin' element={<AddAdmin></AddAdmin>}></Route>
      </Routes>
    </>
  )
}

export default MainRoutes
