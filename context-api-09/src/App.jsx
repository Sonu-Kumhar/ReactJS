import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './pages/AllProducts'
import SelectedProduct from './pages/SelectedProduct'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<SelectedProduct/>}/>
      </Routes>
    </div>
  )
}

export default App