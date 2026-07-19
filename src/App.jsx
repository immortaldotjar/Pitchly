import React from 'react'
import Home from './pages/Home'

import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/explore' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App