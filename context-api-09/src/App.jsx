import React from 'react'
import axios from "axios"
import { useState } from 'react'
const App = () => {

  const [allProducts, setAllProducts] = useState([])

  let getAllProducts = async () => {
    // let response = axios.get("https://fake-store-api.mock.beeceptor.com/api/products")
    let response = await axios.get("https://api.escuelajs.co/api/v1/products")
    let products = response.data;
    setAllProducts([...products])
    console.log(response.data);
  }

  return (
    <div>
      <button className='px-4 py-2 bg-emerald-500 ' onClick={getAllProducts}>Get All Products</button>
      {
        allProducts.map((elem, index)=>{
          return <div className='flex gap-5'>
            <img className='h-40' src={elem.images[0]} alt="" />
            <h2>{elem.title}</h2>
            <h3>{elem.price}</h3>
          </div>
        })
      }
    </div>
  )
}

export default App