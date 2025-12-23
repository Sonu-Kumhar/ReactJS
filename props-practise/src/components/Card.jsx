import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div>
            <div
                className="card w-[280px] h-[380px] rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: props.colors[0] }}
            >
                <div className='image overflow-hidden h-[50%]'>
                    <img className='w-full h-full object-cover' src={props.image} alt="" />
                </div>
                <div className='info flex flex-col h-[50%] px-4'>
                    <h2 className='text-2xl text-[#343434] font-bold'>{props.name}</h2>
                    <div className='properties flex gap-4 text-xs text-[#3a3a3a] px-2 truncate'>
                        <p>{props.properties[0]}</p>
                        <p>{props.properties[1]}</p>
                        <p>{props.properties[2]}</p>
                    </div>
                    <p className='flex text text-[#3a3a3a] mt-2'>{props.description}</p>
                    <div className='flex gap-2 text-[#3c3c3c] text-xs'>
                        <p>{props.properties2[0]}</p>
                        <p className='border-1 border-[#4f4f4f] rounded-xl px-1'>{props.properties2[1]}</p>
                        <p className='border-1 border-[#4f4f4f] rounded-xl px-1'>{props.properties2[2]}</p>
                    </div>

                    <div className='price mt-6 flex items-center gap-3'>
                        <div>
                            <h2 
                                className='text-2xl font-bold text-[#fe4d79] mx-1'
                                style={{color: props.colors[1]}}
                            >
                                {props.price}
                            </h2>
                            <p className='text-xs text-[#404040]'>{props.delivery}</p>
                        </div>
                        <button 
                            className='px-8 text-[#dcdcdc]  font-bold text-[16px] py-1 rounded-4xl'
                            style={{backgroundColor: props.colors[2]}}
                        >
                            Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card