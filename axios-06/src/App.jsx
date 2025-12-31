import React from 'react'
import axios from "axios"

const App = () => {

  let getData = async () => {
    let response = await axios("https://jsonplaceholder.typicode.com/todos/")
    let randomNum = Math.floor(Math.random()*200)
    console.log(response.data[randomNum].title)
  }

  return (
    <div className='w-screen h-screen text-white text-2xl bg-[#213448] p-10'>
      <button onClick={getData} className='text-3xl border-2 bg-[#547792] px-4 py-2 rounded-xl active:scale-95'>Get Data</button>
    </div>
  )
}

// Axios is a JavaScript library used to make HTTP requests (GET, POST, PUT, DELETE) from:
// Browser
// Node.js

// It is mainly used to connect frontend ↔ backend APIs.

export default App