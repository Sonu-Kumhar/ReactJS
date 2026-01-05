import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Products from './pages/Products'
import Courses from './pages/Courses'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
    </Routes>
    </>
  )
}


/**
//Routing in React -> multiple pages, home,about..., BrowserRoute, Link tag
 1. Types of routers (BrowserRouter, Hash router, memory router, static router)
 2. Link, Navlink, style, 
 3. outlet, useNavigate(), queryparams()
 4. createBrowserRouter()
 */

export default App