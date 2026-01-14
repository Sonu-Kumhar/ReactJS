import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-[10vh] flex items-center justify-center bg-[#0f172a] text-white px-4 py-2'>
      <div className='w-1/3 h-full px-4 py-2 rounded-[50px] border-2 border-white bg-[#26265f] flex items-center justify-around gap-10 text-2xl'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cartoons">Cartoons</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </div>
  )
}

export default Navbar