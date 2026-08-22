import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import Features from './pages/Features'
import Community from './pages/Community'
import About from './pages/About'
import SignIn from './components/AuthComps/SignIn'
import SignUp from './components/AuthComps/SignUp'
import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import PlainLayout from './layouts/PlainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import MyStartup from './pages/MyStartup'
import { adminSidebarProps, adminTopbarProps, userSidebarProps, userTopbarProps } from './config/dashboardConfig'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route element={<PlainLayout />}>
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Route>

      <Route path="/admin" element={<DashboardLayout sidebarProps={adminSidebarProps} topbarProps={adminTopbarProps} />}>
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout sidebarProps={userSidebarProps} topbarProps={userTopbarProps} />}>
        <Route index element={<UserDashboard />} />
        <Route path="startup" element={<MyStartup/>} />
        
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App