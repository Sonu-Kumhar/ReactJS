import React from 'react'
import { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("")
  const [allTask, setAllTask] = useState([])

  let submitHandler = (e) => {
      e.preventDefault();
      // console.log("form submitted");
      let newAllTask = [...allTask, task];
      setAllTask(newAllTask);
      // console.log(allTask)
      setTask("")
  }

  let deleteTask = (idx) => {
    let newAllTask =  [...allTask];
    newAllTask.splice(idx, 1);
    console.log(newAllTask);
    setAllTask(newAllTask);
    console.log("task deleted clicked!!!", idx)
  }

  return (
    <div className='w-screen h-screen bg-[#252525] text-white p-10 flex flex-col items-center'>
        <form className='w-full flex items-center justify-center mb-10' onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input 
          type="text"
          placeholder='Enter task' 
          className='text-white text-2xl px-4 py-2 border-2 border-white w-1/3 rounded-xl'
          value={task}
          required
          onChange={(e)=>{
            setTask(e.target.value)
          }}
          />

          <button className='bg-emerald-500 px-4 py-2 text-2xl font-semibold rounded-xl mx-4 active:scale-95'>Add</button>
        </form>

        {
          allTask.map((elem, index)=>{
            return <div key={index} className='flex w-1/3 gap-3 py-2 items-center justify-between'>
              <h1 className='text-2xl font-bold'>{elem}</h1>
              <button onClick={()=>{deleteTask(index)}} className='bg-red-500 px-2 py-1 rounded-lg font-bold active:scale-95'>Delete</button>
            </div>
          })
        }
    </div>
  )
}

export default App