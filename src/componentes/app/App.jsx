import React from 'react'
import '../../styles/style.css'
import Nav from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
// import Build from '../BuildNav/Build'
import Boton from '../elementos/Boton'
import Search from '../elementos/searchBar'
import '../../../sass/slider.css'

const App = () => {
  const conPadd = {
    padding: '0',
    boxSizing: 'border-box',
    marginTop: '20px',
    marginBottom: '20px',
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
            <div>hola</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
