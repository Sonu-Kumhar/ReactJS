import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [allPokemon, setAllPokemon] = useState([])

  let getPokemon = async () => {
    let pokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon")
    let newAllPokemon = [...allPokemon, ...pokemonData.data.results]

    // console.log(newAllPokemon.map((elem, index)=>{
    //   console.log(elem.name, elem.url)
    // }))

    // setAllPokemon(newAllPokemon)
    // console.log(pokemonData.data.results)
    let pokemonArray = pokemonData.data.results; //the url doesn't contains images, it contains another large data in json format

    let urlArray = pokemonArray.map( async (elem, index)=>{
      // console.log(elem.url)
      let pokemonData2 = await axios.get(elem.url); //uss har url pe request kar rhe hai wha se jo data aayega usme actual images ke url hai
      // console.log(pokemonData2.data.sprites.front_default);
      return pokemonData2.data.sprites.front_default;
    })
    let temp = [...newAllPokemon];

    urlArray.forEach((elem, index)=>{ //spread operator se array copy hua hai but uske andar ke objects ka reference same hi hai isliye fir se aisa krna padega temp me copy karke har uss temp ke index pe object destructuring karke url update kar rhe hai
      elem.then((res)=>{
        temp[index] = {...temp[index], url:res}
        // console.log(newAllPokemon[index].url);
        // console.log(res);
        setAllPokemon([...temp])
      })
    })
    // console.log(newAllPokemon)
    // console.log(allPokemon)
    
    
  }

  return (
    <div className='w-fit h-screen p-4'>
      <button onClick={getPokemon} className='text-4xl text-[#323232] font-semibold bg-[yellow] border-2 border-[#2a2a2a] px-4 py-2 rounded-xl active:scale-95 cursor-pointer mb-4'>Pokemon</button>

      <div className='flex w-full flex-wrap gap-4'>
        {
          allPokemon.map((elem, index)=>{
            return <div key={index}>
              <Card name={elem.name} url={elem.url}/>
            </div>
          })
        }
      </div>
      
    </div>
  )
}

export default App