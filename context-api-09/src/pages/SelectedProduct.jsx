import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AllProductDataContext } from '../context/ProductContext'

const SelectedProduct = () => {

  let allProducts = useContext(AllProductDataContext);
  let params = useParams()
  let elem = allProducts[params.id - 1];
  console.log(allProducts[params.id - 1])

  // console.log(params.id)

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='h-140 w-75 p-4 relative border-2 border-[#a9a9a9] rounded-2xl '>
        <img className='h-70 w-full' src={elem.image} alt="" />
        <h2 className='text-lg font-bold line-clamp-2 mt-4'>{elem.title}</h2>
        <p className='line-clamp-5 text-[#474747] text-sm'>{elem.description}</p>
        <div className='w-full flex items-center justify-between mt-4'>
          <p className=' bg-[#d8d5ff] rounded-3xl px-2 py-1 text-[#333333] font-bold'>{elem.category}</p>
          <h3 className='font-semibold mt-2 text-[#000000] bg-zinc-300 rounded-3xl w-fit px-2 py-1'>${elem.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct