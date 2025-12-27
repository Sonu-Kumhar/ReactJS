import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState("")
  const [allUsers, setAllUsers] = useState([])

  let submitHandler = (e) =>{
    e.preventDefault(); 
    console.log(user);
    
    setAllUsers([...allUsers, user]);
    // console.log("form submitted")
    // console.log("All users : ",allUsers);
    setUser("")
  }

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

        {
          allUsers.map((elem, index)=>{
            return <h1 key={index}>{elem}</h1>
          })
        }
    </div>
  )
}

export default App