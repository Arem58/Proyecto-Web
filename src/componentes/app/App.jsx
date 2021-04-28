import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
// import Build from '../BuildNav/Build'
import Boton from '../elementos/Boton'
import Search from '../elementos/searchBar'
import '../../../sass/slider.css'
// imagenes para las cartas 1
import card1 from '../../Recursos/card1.jpg'
import card2 from '../../Recursos/card2.jpg'
import card3 from '../../Recursos/card3.jpg'
import Card1P from '../elementos/Card1'

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
            <div className="cardContainer">
              <Card1P styleB="sinMargen" title="TennoCon 2021" imgsrc={card1} mensaje="Get ready for July 17 with the TennoCon 2021 Digital Pack" />
              <Card1P styleB="Margen" title="Warfame Wayback" imgsrc={card2} mensaje="Relive your journey through the Origin System" />
              <Card1P styleB="Margen" title="Set the stage as Mirage Oneiro" imgsrc={card3} mensaje="Available now on all platforms" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
