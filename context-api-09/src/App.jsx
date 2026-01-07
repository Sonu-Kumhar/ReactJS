import React, { useContext } from 'react'
import Card from './Components/Card'
import AllCourses from './Components/AllCourses'
import { UserContextData } from './context/UserContext'

const App = () => {
  const data = useContext(UserContextData)
  return (
    <div className='text-3xl w-screen h-screen bg-red-200'>
      <h1>App</h1>
      <h2>{data}</h2>
      <Card/>
      <AllCourses/>
    </div>
  )
}

export default App