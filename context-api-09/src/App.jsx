import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './pages/AllProducts'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
      </Routes>
    </div>
  )
}

export default App