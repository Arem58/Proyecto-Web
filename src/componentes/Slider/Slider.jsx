/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
import slide2 from '../../Recursos/slide2.jpg'
import slide3 from '../../Recursos/slide3.jpg'
import '../../../sass/slider.css'
import prime from '../../Recursos/prime-access-badge.png'
import fila1 from '../../Recursos/primeAccessIcon.png'
import fila2 from '../../Recursos/primeVaultIcon.png'
import fila3 from '../../Recursos/buyPlatinumIcon.png'

const Slider = () => {
  const img1 = {
    backgroundImage: `url(${slide2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '100%',
  }
  const img2 = {
    backgroundImage: `url(${slide3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '100%',
  }
  const vid1 = {
    width: '100%',
  }
  const vid2 = {
    height: '101%',
  }
  const postionP = {
    backgroundColor: '#212121',
  }
  const slide1Pos = {
    marginTop: '280px',
    width: '430px',
    zIndex: '3',
  }
  const slide2Pos = {
    marginTop: '50px',
    width: '500px',
    zIndex: '3',
  }
  const slide3Pos = {
    marginTop: '20px',
    width: '500px',
    zIndex: '3',
  }
  const slide5Pos = {
    marginTop: '70px',
    width: '500px',
    zIndex: '3',
  }
  const pMarB = {
    marginBottom: '20px',
    color: 'black',
    fontSize: '16px',
    lineHeight: '1.25em',
  }
  const pMarW = {
    marginBottom: '20px',
    color: 'white',
    fontSize: '16px',
    lineHeight: '1.25em',
  }
  const h3Margin = {
    marginBottom: '15px',
  }
  const imgSlider5 = {
    marginBottom: '20px',
    minWidth: 0,
    border: 'none',
  }

  // texto del h3 del slider 3
  const slide3h3 = 'Warframe on \nXbox Series X|S'
  // texto del h3 del slider 1
  const slide1h3 = 'Zephyr and Chroma \nPrime Vault'

  // styles de la store
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
  const textStore1 = {
    marginLeft: '9px',
    color: '#c99037',
  }
  const textStore2 = {
    marginLeft: '9px',
    color: '#a1a1a1',
  }

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <div style={postionP}>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5" />
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="video-fluid" src="//n9e5v4d8.ssl.hwcdn.net/repos/chromazephyr.webm" autoPlay loop muted style={vid2} />
          <div className="textspace">
            <div className="contaninerSize">
              <a className="a-container" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e" />
              <div className="derecha">
                <div style={slide1Pos}>
                  <h3 style={h3Margin} className="h3white shadow2">{slide1h3}</h3>
                  <p className="shadow2" style={pMarW}>Get instant access today!</p>
                  <a className="redButon" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" autoPlay loop muted style={vid1}>
            <source src="http://n9e5v4d8.ssl.hwcdn.net/images/promo/tempestarii/info/keyart.webm" type="video/webm" />
          </video>
          <div className="textspace">
            <div className="contaninerSize">
              <a className="a-container" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e" />
              <div className="derecha">
                <div style={slide2Pos}>
                  <h3 style={h3Margin} className="h3white">CALL OF THE TEMPESTARII</h3>
                  <p className="shadow1" style={pMarW}>AVAILABLE NOW ON ALL PLATFORMS</p>
                  <a className="redButon" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={img1}>
          <div className="textspace">
            <div className="contaninerSize">
              <a className="a-container" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e" />
              <div className="izquierda">
                <div style={slide2Pos}>
                  <h3 style={h3Margin} className="h3black">8 Year Anniversary</h3>
                  <p className="shadow1" style={pMarB}>Log in now to get the Rhino Dex Skin and more</p>
                  <a className="redButon" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={img2}>
          <div className="textspace">
            <div className="contaninerSize">
              <a className="a-container" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e" />
              <div className="izquierda">
                <div style={slide3Pos}>
                  <h3 style={h3Margin} className="h3white">{slide3h3}</h3>
                  <p className="shadow1" style={pMarW}>Start playing today</p>
                  <a className="redButon" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" autoPlay loop muted style={vid2}>
            <source src="http://n9e5v4d8.ssl.hwcdn.net/repos/WF_OctaviaPrimeAccess_WebNews_3840x1040.webm" type="video/webm" />
          </video>
          <div className="textspace">
            <div className="contaninerSize">
              <a className="a-container" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e" />
              <div className="derecha">
                <div style={slide5Pos}>
                  <img src={prime} alt="Slider de prime acces" style={imgSlider5} />
                  <h3 style={h3Margin} className="h3white">Octavia Prime Access</h3>
                  <p className="shadow1" style={pMarW}>Strike up a symphony of destruction with Octavia Prime!</p>
                  <a className="redButon" href="https://www3.animeflv.net/anime/fumetsu-no-anata-e">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="store">
        <div className="contaninerSize">
          <div style={conPadd} className="container">
            <div className="row">
              <div style={colStyle} className="col">
                <a className="aStore" href="https://www3.animeflv.net/anime/jakuchara-tomozakikun">
                  <img src={fila1} alt="FIla 1" />
                  <span style={textStore1}>Prime Access</span>
                </a>
              </div>
              <div style={colStyle} className="col">
                <a className="aStore" href="https://www3.animeflv.net/anime/jakuchara-tomozakikun">
                  <img src={fila2} alt="FIla 2" />
                  <span style={textStore2}>Prime Vault</span>
                </a>
              </div>
              <div style={colStyle} className="col">
                <a className="aStore" href="https://www3.animeflv.net/anime/jakuchara-tomozakikun">
                  <img src={fila3} alt="FIla 2" />
                  <span style={textStore2}>Buy Platinum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
