import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceList from './Components/PriceList/PriceList'
import DashBoard from './Components/DashBoard/DashBoard'
import Mobile from './Components/Mobile/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className="text-7xl text-center m-3 bg-yellow-400 rounded text-black-800 pb-5 font-bold underline">
          Hello world!
        </h1>
        <PriceList></PriceList>
        <DashBoard></DashBoard>
       
      </div>
    </>
  )
}

export default App
