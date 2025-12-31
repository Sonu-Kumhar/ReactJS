import React from 'react'

const Card = (props) => {
    // console.log("props: ", props)
  return (
    <div className='w-65 h-75 text-black bg-[#e5e5e5] border-8 border-[#ffffff] rounded-4xl overflow-hidden'>
        <img className='w-full h-[75%] object-center object-cover' src={props.url} alt="" />
        <h2 className='flex items-center px-4 text-[#242424] justify-center w-full h-[25%] font-bold text-3xl'>{props.name}</h2>
    </div>
  )
}

export default Card