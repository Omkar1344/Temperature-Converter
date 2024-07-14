import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import TempConv from './TempConv'
import Temp from './Temp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Temp/>
    </>
  )
}

export default App
