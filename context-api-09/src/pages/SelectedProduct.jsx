import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AllProductDataContext } from '../context/ProductContext'

const SelectedProduct = () => {

  let allProducts = useContext(AllProductDataContext);
  let params = useParams()
  console.log(params)
  let elem = allProducts[params.id - 1];
  // console.log(allProducts[params.id - 1])

  // React component ek baar run hone wala function nahi hota.
// Jab bhi state, props ya context change hota hai,
// React is component function ko dobara call karta hai (re-render).
// Isliye initial render par "Loading" dikh sakta hai,
// aur data aane ke baad same component automatically dobara run
// hoke actual UI show kar deta hai.


// Jis component ne context use kiya hai, context change hote hi React us component ko DOBARA CALL karta hai

  let selectedProduct = "loading..."

  if(allProducts.length === 0){
    return <h1>Loading...</h1>
  }

  if(allProducts.length > 0){
    selectedProduct = allProducts.find((elem)=>{
      return params.id === elem.id
    })

    console.log("selectedProduct:", selectedProduct);
  }

  // console.log(params.id)

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='absolute w-full h-12 px-10 py-2 top-5 text-3xl font-bold bg-red-500 text-white'>

        <h1 className='animate-marquee2'>!!! Sale is Live !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!! Sale is Live !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!! Sale is Live !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!! Sale is Live !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; !!! Sale is Live !!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>

      </div>
      
      <div className='h-140 w-75 p-4 relative border-2 border-[#a9a9a9] rounded-2xl '>
        <img className='h-70 w-full' src={elem.image} alt="" />
        <h2 className='text-lg font-bold line-clamp-2 mt-4'>{elem.title}</h2>
        <p className='line-clamp-6 text-[#474747] text-sm'>{elem.description}</p>
        <div className='w-full flex items-center justify-between mt-4'>
          <p className=' bg-[#d8d5ff] rounded-3xl px-2 py-1 text-[#333333] font-bold'>{elem.category}</p>
          <h3 className='font-semibold mt-2 text-[#000000] bg-zinc-300 rounded-3xl w-fit px-2 py-1'>${elem.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct