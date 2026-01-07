import React, { useCallback, useContext } from 'react'
import { UserContextData } from '../context/UserContext'

const Card = () => {
  const data = useContext(UserContextData)
  return (
    <div className='w-full h-40 bg-emerald-300'>
      <h2>Card</h2>
      {data}
    </div>
  )
}

export default Card