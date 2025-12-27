import React from 'react'

const Card = (props) => {
    console.log("props : ", props)
    //   console.log(props)
    return (
        <div className='w-1/3 flex items-center gap-4 px-4'>
            <div>
                <img className='w-15' src="https://freepngimg.com/save/37603-pokeball/894x894" alt="" />
            </div>
            <div className='w-3'>
                <h1 className='text-xl'>{props.name}</h1>
                <p className='text-sm text-[#c7c3c3]'>{props.email}</p>
            </div>
        </div>
    )
}

export default Card