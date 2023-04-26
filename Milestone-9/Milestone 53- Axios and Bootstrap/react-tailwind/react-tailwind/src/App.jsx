// import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1 className="text-7xl text-purple-800 pb-5 font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
