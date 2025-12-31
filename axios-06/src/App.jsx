import React, { useState } from 'react'
import axios from "axios"
import Card from './components/Card'

const App = () => {

  const [allData, setAllData] = useState([])

  let getData = async () => {
    let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=50")
    let newAllData = [...allData, ...response.data];
    setAllData(newAllData)
    console.log(response.data)
  }

  return (
    <div className='w-screen h-screen text-white text-2xl p-6'>
      <button onClick={getData} className='text-3xl font-semibold border-4 border-[#ffffff] text-[#f1f1f1] bg-[#00b04c] px-4 py-2 rounded-xl mb-4 active:scale-95'>Get Data</button>
    
      <div className='w-full flex gap-4 flex-wrap'>
        {
          allData.map((elem, index)=>{
            return <div key={index}>
              {/* <h1>{elem.author}, {elem.url}</h1> */}
              <Card  name = {elem.author} url={elem.download_url}/>
            </div>
          })
        }
      
        {/* <Card/> */}
      </div>
    </div>
  )
}

// Axios is a JavaScript library used to make HTTP requests (GET, POST, PUT, DELETE) from:
// Browser
// Node.js

// It is mainly used to connect frontend ↔ backend APIs.

export default App