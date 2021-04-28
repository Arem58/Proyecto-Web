import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Build from '../BuildNav/Build'

const App = () => (
  <div>
    <header>
      <Nav />
    </header>
    <main className="container_content">
      <Build />
      <Slider />
      <div>
        hola
      </div>
    </main>
  </div>
)

export default App
