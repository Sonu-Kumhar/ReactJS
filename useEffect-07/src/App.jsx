import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    console.log("useEffect is running")
  },[counter])    

  return (
    <div className='text-3xl p-10'>
      <button onClick={()=>{
        setCounter(counter+1)
      }} className='text-4xl bg-emerald-500 px-4 py-2 border-2 rounded-xl text-white border-black active:scale-95'>Click</button>
    </div>
  )
}

// Render = WHAT to show
// Effect = WHAT to do after showing

// useEffect(() => {              first argument -> fxn, 2nd argument -> dependency array (if not used then useEffect will run on every render)
//   // side-effect code
// }, [])


// React UI render karta hai
// Aur jab render ke baad state / props change hote hain,
// aur us change ke response mein koi side ka kaam karna ho,
// to hum useEffect use karte hain

// side ways kaam ka mtlb : 
// API call 
// title change
// console log
// timer 
// localStorage

// Render = UI banane ka kaam
// useEffect = UI ke baad hone wale kaam

export default App