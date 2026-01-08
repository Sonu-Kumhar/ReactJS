import React from 'react'
import { useState, useEffect } from 'react'
import getAllProducts from "../api/ProductApi"

const AllProducts = () => {

   const [allProducts, setAllProducts] = useState([])

    let gettingProductsData = async () =>{
      let data = await getAllProducts();
        setAllProducts([...data])
        // console.log(data)
    }

    useEffect(()=>{
        gettingProductsData();
    },[])

    return (
        <div className='w-full h-full p-8 bg-[#dcdcdc]'>

            <div className=' flex flex-wrap gap-12 text-black '>
                {
                    allProducts.map((elem, index) => {
                        return <div key={elem.id} className='h-90 w-60 flex justify-center items-center px-2 py-2 bg-[#e7e7e7] rounded-2xl'>
                            <div className='h-85 w-55 p-4 border-2 border-[#a9a9a9] rounded-2xl'>
                                <img className='h-50 w-full' src={elem.image} alt="" />
                                <h2 className='text-sm font-bold line-clamp-2 mt-4'>{elem.title}</h2>
                                <h3 className='font-semibold mt-2 text-[#000000] bg-zinc-300 rounded-3xl w-fit px-2 py-1'>${elem.price}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts