import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'

const App = () => (
  <div>
    <header>
      <Nav />
    </header>
    <div className="container_content">
      <Slider />
    </div>
  </div>
)

export default App
