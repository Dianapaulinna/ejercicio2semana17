import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/contador'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Hola desde react</h1>
      <Contador />
      <br />

      </div>
  )
}

export default App
