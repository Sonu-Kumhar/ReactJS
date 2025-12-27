import React from 'react'
import { useState } from 'react'

const App = () => {
  const initialArray = [10, 20, 30, 40, 50]
  const [arr, setArr] = useState(initialArray);
  const [previous, setPrevious] = useState([]);

  let multiply2 = () => {
    let newArr = arr.map(elem => { return elem * 2 })
    let prev = [...previous, arr];
    setPrevious(prev);
    setArr(newArr)
  }

  let removeFirst = () => {
    let newArr = arr.slice(1);
    let prev = [...previous, arr];
    setPrevious(prev);
    setArr(newArr);
  }

  let undo = () => {
    console.log(previous);
    if (previous.length > 0) {
      setArr(previous[previous.length - 1]);
      setPrevious(previous => previous.slice(0, -1))
    }else{
      console.log("no undo")
    }

  }

  return (
    <div className='w-screen h-screen bg-[#222] text-[#e7e7e7] flex flex-col items-center justify-center gap-6'>
      <div className='flex gap-6'>
        {
          arr.map((elem, index) => {
            return <h1 key={index} className='text-5xl'>{elem}</h1>
          })
        }
      </div>

      <button onClick={multiply2} className='text-3xl bg-emerald-500 px-6 py-2 font-bold border-2 border-white rounded-lg active:scale-95'>x2</button>

      <button onClick={removeFirst} className='text-3xl bg-red-500 px-6 py-2 font-bold border-2 border-white rounded-lg active:scale-95'>Remove first</button>

      <button onClick={undo} className='text-3xl px-6 py-2 font-bold border-2 border-white rounded-lg active:scale-95'>Undo</button>

    </div>
  )
}

export default App


// Problem 2 : State History Manager (Advanced Thinking)
// Buttons Required:

// 1️⃣ Double all values
// → [20, 40, 60]
// 2️⃣ Remove first element
// → [20, 30]
// 3️⃣ Undo last operation
// → Goes back to previous state

// Special Rule:
// You must store previous array states
// Undo should work multiple times
// No mutation of past states
// Only useState (no reducer yet)

// Constraints:
// No input
// No push, pop, shift, splice
// Use:
// map
// slice
// spread operator
// Maintain immutability at every level