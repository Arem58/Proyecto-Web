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
// Social media
import Social from '../Social/Social'
import Pc from '../../Recursos/pcLogo.png'
import ps4 from '../../Recursos/PS4logo.png'
import ps5 from '../../Recursos/PS5Logo.png'
import Switch from '../../Recursos/switch.jpg'
import xbox from '../../Recursos/XB1Logo.png'
import xboxl from '../../Recursos/XBSXLogo.png'
import De from '../../Recursos/DELogo.jpg'
import Evo from '../../Recursos/evo.png'
import nvidia from '../../Recursos/nvidia.png'
import edad from '../../Recursos/mesrb2.jpg'

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
  const imageSize = {
    maxWidth: '150px',
  }
  const pStyle = {
    marginBottom: '0',
    fontSize: '12px',
    fontFamily: 'Open Sans, sans-serif',
    color: '#686868',
    lineHeight: '1',
    fontWeight: 'normal',
    whiteSpace: 'pre-wrap',
  }
  const texto1 = '“PlayStation Family Mark“, “PlayStation”, “PS5 logo”, “PS5“, “PS4 \nlogo”, “PS4“, “PlayStation Shapes Logo” and “Play Has No Limits“ are \nregistered trademarks or trademarks of Sony Interactive \nEntertainment Inc.'
  const texto2 = ' Warframe, the Warframe logo, and Evolution Engine are registered \ntrademarks of Digital Extremes Ltd.'
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
            <div style={{ marginBottom: '50px' }}>
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
          <footer>
            <div className="contaninerSize">
              <Social />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <h4 className="h4Style">Warframe</h4>
                </div>
                <div className="col-2">
                  <h4 className="h4Style">Account</h4>
                </div>
                <div className="col-2">
                  <h4 className="h4Style">Communuty</h4>
                </div>
                <div className="col-2">
                  <h4 className="h4Style">Support</h4>
                </div>
                <div className="col-4">
                  <div className="row mb-2">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-1 ms-2">
                          <img src={Pc} alt="Imagen de plataforma de juego" />
                        </div>
                        <div className="col-4 ms-3">
                          <img src={ps4} alt="Imagen de plataforma de juego" />
                        </div>
                        <div className="col-4 ms-3">
                          <img src={ps5} alt="Imagen de plataforma de juego" />
                        </div>
                        <div className="col-4 ms-2 me-2">
                          <img src={xbox} alt="Imagen de plataforma de juego" />
                        </div>
                        <div className="col-4 ms-4">
                          <img src={xboxl} alt="Imagen de plataforma de juego" />
                        </div>
                      </div>
                    </div>
                    <div className="col-2 ms-2">
                      <img src={Switch} alt="Imagen de plataforma de juego" />
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-4 me-2">
                      <img src={edad} alt="Imagen de plataforma de juego" />
                    </div>
                    <div className="col-1 ms-2 me-2">
                      <img src={De} alt="Imagen de plataforma de juego" />
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div className="col-10">
                          <img style={imageSize} src={Evo} alt="Imagen de plataforma de juego" />
                        </div>
                        <div className="col-10 ms-1">
                          <img src={nvidia} alt="Imagen de plataforma de juego" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style={pStyle}>Online Interactions Not Rated by the ESRB.</p>
                  <p style={pStyle}>©2021 Digital Extremes Ltd. All rights reserved.</p>
                  <p style={pStyle}>{texto2}</p>
                  <p style={pStyle}>{texto1}</p>
                  <p style={pStyle}>Nintendo Switch is a trademark of Nintendo.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
