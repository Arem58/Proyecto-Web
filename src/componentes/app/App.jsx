import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Build from '../BuildNav/Build'
import Boton from '../elementos/Boton'
import Search from '../elementos/searchBar'
import '../../../sass/slider.css'
// imagenes para las cartas 1
import Card1P from '../Card/Card1'
// imagenes para las cartas 2
import Card2P from '../Card/Card2'
import Boton2 from '../elementos/Boton2'

const App = () => {
  const conPadd = {
    padding: '0',
    boxSizing: 'border-box',
  }
  const colStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '0',
    boxSizing: 'border-box',
  }
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="container_content">
        <Build />
        <Slider />
        <div className="main_Container">
          <div className="contaninerSize">
            <div className="containerNav">
              <div style={conPadd} className="container">
                <div className="row">
                  <div className="col-sm">
                    <Boton title="PC" styleB="botonPc" />
                    <Boton title="PSN" styleB="botonPS" />
                    <Boton title="XBOX" styleB="botonXbox" />
                    <Boton title="NINTENDO SWITCH" styleB="botonSwitch" />
                    <Boton title="blog" styleB="botonBlog" />
                  </div>
                  <div style={colStyle} className="col-sm">
                    <Search />
                  </div>
                </div>
              </div>
            </div>
            <Card1P />
            <div>
              <div style={conPadd} className="container">
                <div className="row">
                  <div className="col-8">
                    <Card2P />
                    <Boton2 title="Load 10 More" />
                  </div>
                  <div className="col-4">
                    <a className="aStyleContent" href="https://www3.animeflv.net/anime/kamisama-ni-natta-hi">Tweets by @PlayWarframe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
