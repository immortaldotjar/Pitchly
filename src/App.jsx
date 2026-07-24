import React from 'react'
import Home from './pages/Home'

import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignIn from './components/AuthComps/SignIn'
const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      <SignIn/>
      {/* <Footer /> */}
    </div>
  )
}

export default App