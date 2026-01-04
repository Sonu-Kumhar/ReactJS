import React from 'react'
import { useNavigate } from 'react-router-dom'
import Courses from './Courses';


const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='text-9xl'>
      
     <h1> Contact Page</h1>
    
     <button onClick={()=>{
      navigate("/courses")
     }} className='text-3xl bg-emerald-500  px-4 py-2 text-white active:scale-95 '>Explore courses</button> 
    </div>
  )
}

export default Contact