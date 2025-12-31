import React from 'react'

const Card = (props) => {
  console.log("props: ", props)
  return (
    <div className='w-65 h-75 border-8 border-[black] rounded-4xl overflow-hidden bg-[#ff6767]'>
        <img className='w-full h-[80%] object-cover' src={props.url} alt="" />
        <h2 className='text-black bg-[#efefef] font-semibold h-[20%] text-3xl flex items-center justify-center'>{props.name}</h2>

    </div>
  )
}

export default Card