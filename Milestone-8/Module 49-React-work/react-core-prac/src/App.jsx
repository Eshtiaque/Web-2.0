import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'
import Dial from './components/Dial/Dial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Device name="X-phone" price="100000"></Device>
  <Device name="Y-phone" price="150000"></Device>
  <Watch></Watch>
  {/* <Dial></Dial> */}
  

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
