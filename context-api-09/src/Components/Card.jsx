import React from 'react'
import { useState } from 'react'

const Card = (props) => {
    console.log(props)

  let arr = ["Kim ji-won, Emily Rudd, Namra, Ironman"];
  let randomIdx = Math.floor(Math.random()*4);

  return (
    <div>
      {props.fxn("Hello")}
      {/* {props.changeName(arr[randomIdx])} */}
        <h1>Name is changing</h1>
    </div>
  )
}

export default Card