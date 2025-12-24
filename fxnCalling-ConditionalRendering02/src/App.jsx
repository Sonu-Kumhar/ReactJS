import React from 'react'
import Pikachu from './components/Pikachu'
import Raichu from './components/Raichu'

const App = () => {

  let user = "Ash";


  return (
    <div>
        {user=="Ash" ? <Pikachu/> : <Raichu/>}
    </div>
  )
}

export default App