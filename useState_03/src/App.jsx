import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  return (
    <div className='w-screen h-screen flex items-center justify-center gap-10'>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
        className='text-5xl bg-red-500 p-8 text-white rounded-2xl active:scale-95'>
        Come behind
      </button>

      <h1 className='text-9xl'>{num}</h1>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className='text-5xl bg-emerald-600 p-8 text-white rounded-2xl active:scale-95'>
        Go ahead
      </button>
      
    </div>
  )
}

// useState is a built-in React Hook that allows functional components to manage local component state.
// It provides a way to store, update, and trigger re-rendering based on state changes.

export default App