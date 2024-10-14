import React from 'react'
import DefaultLayout from '@/layout/DefaultLayout'
import AboutPage from '@/pages/About'
import FAQPage from '@/pages/FAQ'
import FeaturePage from '@/pages/Features'
import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Login'
import NotFoundPage from '@/pages/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Routers: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/feature' element={<FeaturePage />}></Route>
            <Route path='/FAQ' element={<FAQPage />}></Route>
          </Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default Routers
