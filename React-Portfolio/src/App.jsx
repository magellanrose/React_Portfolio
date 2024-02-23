import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Project from './components/Project'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { Outlet } from 'react-router-dom';




function App() {

  return (
    <>
      <Outlet />
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
