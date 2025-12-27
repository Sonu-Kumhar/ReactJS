import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState("")

  let submitHandler = (e) =>{
    e.preventDefault(); 
    console.log(user)
    console.log("form submitted")
  }

  // Input controlled hai, state single hai, submit state ko read karta hai — code perfect hai

  let writingSomething = (e) => {
    setUser(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className='w-screen h-screen text-3xl p-10 bg-[#222] text-white'>
        <form onSubmit={submitHandler}>
          <input
           className='border-2 border-white  px-4 py-2 rounded-xl'  
           type="text" 
           placeholder='Enter your name'
           onChange={writingSomething}
           value={user}
          />
          <button className='m-4 bg-emerald-400 px-4 py-2 rounded-xl active:scale-95 font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default App