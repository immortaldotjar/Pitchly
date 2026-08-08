import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'

import TermsOfService from './pages/TermsOfService'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignIn from './components/AuthComps/SignIn'
import SignUp from './components/AuthComps/SignUp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import Features from './pages/Features'
import Community from './pages/Community'
import About from './pages/About'

const MainLayout = () => (
  <>
    <NavBar />
    <Outlet /> 
    <Footer />
  </>
);

const AuthLayout = () => (
  <Outlet />
);

const PlainLayout = () => (
  <Outlet />
);

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About/>} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route element = {<PlainLayout/>} >
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Route>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
  )
}

export default App
