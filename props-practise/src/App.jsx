import React from 'react'
import Card from './components/Card'

const App = () => {

  const heroes=["ShadowStrike","IronFalcon","NightBlaze","ThunderClaw","NovaKnight","PhantomX","SolarFury","DarkSpecter","StormRider","CrimsonVigil"];


  return (
    <div className='w-screen h-screen bg-[#262626] flex flex-wrap p-4 gap-5 text-white'>
      {heroes.map((elem)=>{
        return <Card user={elem} />
      })}
    </div>
  )
}

export default App