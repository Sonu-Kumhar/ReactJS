import React from 'react'
import { NavLink } from 'react-router-dom'
import orderIcon from "../assets/icons/order.png"

const Navbar = () => {
  return (
    <div className='py-2 flex px-10 rounded-4xl justify-center text-3xl items-center'>
      <div className='bg-[#3c3c3c] w-fit rounded-4xl px-10 py-2 flex gap-10 items-center justify-center text-white font-semibold'>
        <NavLink to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >Home
        </NavLink>

        <NavLink to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >Products
        </NavLink>

        <NavLink to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >About
        </NavLink>

        <NavLink to="/courses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >Courses
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar