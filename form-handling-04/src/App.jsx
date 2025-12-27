import React from 'react'

const App = () => {

  let submitHandler = (e) =>{
    e.preventDefault(); 
    //browser ke default behaviour ko rokne ke liye e.preventDefault() use karte hai
    //default behaviour jaise form submit hua to reload hona so usko rokne ke liye preventDefault() use krte hai
    //e.preventDefault() browser ke default action ko rokta hai
    console.log("form submitted");
  }

  return (
    <div className='w-screen h-screen text-3xl p-10 bg-[#222] text-white'>
        <form onSubmit={submitHandler}>
          <input className='border-2 border-white  px-4 py-2 rounded-xl'  type="text" placeholder='Enter your name'/>
          <button className='m-4 bg-emerald-400 px-4 py-2 rounded-xl active:scale-95 font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default App