import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
    <Outlet />
    <Header />
     <Footer />
    </>
  )
}

export default App
