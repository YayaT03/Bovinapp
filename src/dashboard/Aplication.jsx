import React from 'react'

import { Route, Routes } from 'react-router'
import NavbarDashboard from '../dashoboard/components/NavbarDashboard'

import Home from "./view/Home"


const Aplication = () => {
  return (
    <div>

      <NavbarDashboard/>     
   
        <Routes>
      
            <Route path='/' element={<Home/>}/>
            
        </Routes>
        
    </div>
  )
}

export default Aplication