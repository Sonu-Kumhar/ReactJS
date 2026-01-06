import React from 'react'
import { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [name, setName] = useState("Shradhha")
  // let changeName = (ChangedName) =>{
  //   console.log("button clicked")
  //   console.log("changeName: ", changeName)
  //   setName(ChangedName);
  // }
  return (
    <div className='w-screen h-screen text-4xl flex  flex-col gap-5 justify-center items-center bg-[#d3d3d3]'>
      <h1>{name}</h1>
      <button className='bg-emerald-500 px-4 py-2 active:scale-95 rounded-xl text-white' onClick={()=>{
        // changeName()
      }}>Change Name</button>
      <Card fxn = {setName} />
      
    </div>
  )
}

export default App