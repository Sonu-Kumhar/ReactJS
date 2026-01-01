import React from 'react'

const Card = ({ name, affiliation, gender, race, ki, image }) => {
    let cardUrl = ["https://i.pinimg.com/736x/18/47/69/18476926ea4f05176521d48ef7dd95ad.jpg",
        "https://i.pinimg.com/736x/d6/7e/7f/d67e7f219701eb3c3ec729cd28935fa2.jpg",
        "https://i.pinimg.com/736x/2a/8d/d4/2a8dd41fd6dd0717627c3da7e04ea3d6.jpg",
        "https://i.pinimg.com/736x/6b/7a/8a/6b7a8a3a93c230a169f09af244c6d25f.jpg"
    ]
    let randomNum = Math.floor(Math.random()*4);
    return (
        <div className='card w-70 h-105 rounded-lg'>

            <div className=' relative w-full h-full  [perspective:1000px]'>

                <div className='card-frame w-full h-full transition-transform duration-500 [transform-style:preserve-3d]'>
                    <img className='object-cover relative dragon-frame' src={cardUrl[randomNum]} alt="" />

                    <div className='w-28'>
                        <img className='h-80 w-45 absolute image top-20 left-28 object-contain object-center transition-all duration-[500ms]' src={image} alt="" />
                    </div>
                    <div className='absolute top-35 left-12 text-3xl px-2 font-semibold'>{name}</div>
                    <div className='absolute top-46 left-12 text-2xl px-2 font-normal'>{affiliation}</div>
                    <div className='absolute top-52 left-12 text-2xl px-2 font-normal'>{race}</div>
                    <div className='absolute top-58 left-12 text-2xl px-2 font-normal'>{gender}</div>
                    <div className='absolute top-64 left-12 text-2xl px-2 font-normal'>{ki}</div>
                    <button className='absolute top-78 left-15 text-4xl px-2 text-white py-1 rounded-2xl active:scale-90 cursor-pointer'>Play</button>
                </div>

            </div>

        </div>
    )
}

export default Card