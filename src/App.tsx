import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar/>
    </div>
  )
}

export default App
