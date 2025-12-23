import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className=' p-5 w-[30%] border-2 border-white rounded-sm text-white'>
        <h1 className='text-xl text-center'>{props.user}</h1>
        {/* <h1 className='text-6xl text-center '>{props}</h1> */} 
        {/* JS can't render objects directly if we still want then we will have to convert it to json
        JSX sirf string, number, boolean, element render kar sakta hai — object nahi 
        <h1>{JSON.stringify(props)}</h1> */}
    </div>
  )
}

export default Card