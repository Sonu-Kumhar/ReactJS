import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [pokemon, setPokemon] = useState("")
  const [email, setEmail] = useState("")
  const [allPokemon, setAllPokemon] = useState([])

  let submitHandler = (e) => {
    e.preventDefault();
    // console.log("form submitted")
    setAllPokemon([...allPokemon, {pokemon, email}])
    // console.log(allPokemon)
    setPokemon("")
    setEmail("")
  }

  let writingPokemon = (e) => {
    setPokemon(e.target.value)
    // console.log(e.target.value)
  }

  let writingEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='w-screen h-screen bg-[#222] text-white p-10 flex flex-col gap-8'>
      <form className='flex flex-col w-1/4 gap-5 text-2xl' onSubmit={submitHandler}>
        <input 
        type="text" 
        placeholder='Enter Pokemon Name'
        value={pokemon}
        onChange={writingPokemon}
        required
        className='border-2 border-white px-4 py-2 rounded-xl'
        />
        <input 
        type="text" 
        placeholder='Enter Email'
        value={email}
        onChange={writingEmail}
        className='border-2 border-white px-4 py-2 rounded-xl'
        />

        <button className='border-2 border-white bg-emerald-500 font-bold px-4 py-2 rounded-xl active:scale-95'>Add</button>
      </form>

      <div className='w-full h-80 flex flex-col gap-8 flex-wrap'>
        {
        allPokemon.map((elem, index)=>{
          return <div key={index}>
            <Card name={elem.pokemon} email={elem.email}/>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default App