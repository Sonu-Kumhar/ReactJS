import React from 'react'

const Card = () => {
  return (
    <div className='card w-60 h-80 p-4 bg-[#3b033d]'>
        <div className='card1 w-50 h-50 bg-[#08CB00] mb-4 border-2 border-[#EEEEEE]'>
            <img src="https://i.pinimg.com/736x/64/e5/84/64e584ca77db6d21073c87e0512786bd.jpg" alt="" />
        </div>
        <div className='card2 flex items-center justify-center pb-3 w-50 h-20 border-2 border-[#EEEEEE] bg-[#000000] text-white'>
            <h2 className='text-2xl uppercase'>Steel druido</h2>
        </div>
    </div>
  )
}

export default Card