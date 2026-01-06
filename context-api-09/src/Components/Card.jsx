import React from 'react'
import { useState } from 'react'

const Card = (props) => {
    const [newName, setNewName] = useState("")
    console.log(props)

 let arr = ["Kim ji-won, Emily Rudd, Namra, Ironman"];
 let randomIdx = Math.floor(Math.random()*4);
  return (
    <div>
        <h1>Name is changing...</h1>
    </div>
  )
}

export default Card