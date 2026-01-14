import React from 'react'
import Home from './pages/Home'
import Cartoons from './pages/Cartoons'
import Movies from './pages/Movies'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cartoons" element={<Cartoons/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </div>
  )
}

export default App