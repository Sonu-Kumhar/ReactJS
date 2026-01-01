import React from 'react'

const Card = ({name, affiliation, gender, race, ki, image}) => {
    return (
        <div className='card w-70 h-105 rounded-lg'>
            
           <div className='relative w-full h-full '>
            <img className='object-cover relative ' src="https://i.pinimg.com/736x/d6/7e/7f/d67e7f219701eb3c3ec729cd28935fa2.jpg" alt="" />

            <div className='w-28'>
                <img className='h-80 w-45 absolute top-20 left-28 object-contain object-center hover:scale-125 transition-all duration-[500ms]' src={image} alt="" />
            </div>
            <div className='absolute top-35 left-12 text-3xl px-2 font-semibold'>{name}</div>
            <div className='absolute top-46 left-12 text-2xl px-2 font-normal'>{affiliation}</div>
            <div className='absolute top-52 left-12 text-2xl px-2 font-normal'>{race}</div>
            <div className='absolute top-58 left-12 text-2xl px-2 font-normal'>{gender}</div>
            <div className='absolute top-64 left-12 text-2xl px-2 font-normal'>{ki}</div>
            <button className='absolute top-78 left-15 text-4xl px-2 text-white py-1 rounded-2xl active:scale-90 cursor-pointer'>Play</button>
           </div>
        </div>
    )
}

export default Card