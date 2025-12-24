import React from 'react'
import Pikachu from './components/Pikachu'
import Raichu from './components/Raichu'
import Pichu from './components/Pichu'

const App = () => {

  let power = 10;


  return (
    <div>
        {power >= 100 ? <Raichu/> : power >= 50 ? <Pikachu/> : <Pichu/>}
    </div>
  )
}

export default App