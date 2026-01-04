import React from 'react'
import { Link } from 'react-router-dom'
import orderIcon from "../assets/icons/order.png"

const Navbar = () => {
  return (
    <div className='py-2 flex px-10 rounded-4xl justify-center text-3xl items-center'>
        <div className='bg-emerald-500 w-fit rounded-4xl px-10 py-2 flex gap-10 items-center justify-center text-white font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/products"> <img className='w-15' src={orderIcon} alt="Product.png" />Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar