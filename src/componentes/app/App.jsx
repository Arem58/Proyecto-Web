import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'

const App = () => (
  <div>
    <header>
      <Nav />
    </header>
    <main className="container_content">
      <Slider />
      <div>
        hola
      </div>
    </main>
  </div>
)

export default App
