import { useState } from 'react'
import './App.css'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
