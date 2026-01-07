import React, { useContext } from 'react'
import Course1 from './Course1'
import Course2 from './Course2'
import Course3 from './Course3'
import { UserContextData } from '../context/UserContext'

const AllCourses = () => {
    const data = useContext(UserContextData)
  return (
    <div className='text-2xl h-80 w-full bg-[#a69cff]'>
        <h1>All Courses</h1>
        <h2>{data}</h2>
        <Course1/>
        <Course2/>
        <Course3/>
    </div>
  )
}

export default AllCourses