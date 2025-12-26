  import React from 'react'
  import { useState } from 'react';

  const App = () => {

    const initialArray = [15, 20, 25, 14, 36]
    let [arr, setArr] = useState(initialArray);

    let increaseOne = () =>{
      let newArr = arr.map((elem)=>{
          return elem+1;
      })
      setArr(newArr);
    }

    let removeLast = () =>{
      setArr(arr = arr.slice(0,-1));
      console.log(arr);
    }

    return (
      <div className='w-screen h-screen bg-[#1e1e1e] text-white text-4xl p-8 flex flex-col items-center justify-center gap-5'>

         <div className='flex gap-5'>
           {
            arr.map((elem, index) => {
              return <h1 key={index}> <span>{elem}</span></h1>
            })
          }
         </div>
        
        <button onClick={increaseOne} className='text-4xl border-2 bg-emerald-500 font-bold px-4 py-2 active:scale-90'>+1</button>
        
        <button onClick={removeLast} className='text-4xl border-2 bg-red-500 font-bold px-4 py-2 active:scale-95'>Remove last element</button>

        <button onClick={()=>{
            setArr(initialArray);
        }} className='text-4xl border-2 bg-blue-500 font-bold px-4 py-2 active:scale-95'>Reset</button>
      </div>
    )
  }

  export default App