/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import '../../styles/Build.css'
import PC from '../../Recursos/pcGrey.png'
import Xbox from '../../Recursos/xb1.png'
import PS4 from '../../Recursos/ps4.png'
import Switch from '../../Recursos/switch.png'

const Build = () => {
  const [builsPos, setbuilsPos] = React.useState(0)
  const stylePC = {
    color: '#212121',
  }
  const styleXbox = {
    color: '#005400',
  }
  const stylePS4 = {
    color: '#034169',
  }
  const styleSwitch = {
    color: '#d30000',
  }
  const barraPC = {
    backgroundColor: '#212121',
  }
  const barraXbox = {
    backgroundColor: '#005400',
  }
  const barraPS4 = {
    backgroundColor: '#034169',
  }
  const barraSwitch = {
    backgroundColor: '#d30000',
  }
  const position1 = {
    left: '30px',
  }
  const position2 = {
    left: '20px',
  }
  const position3 = {
    left: '40px',
  }
  const posicion = {
    transform: `translate(${builsPos}px`,
    transition: 'transform 0.5s',
  }
  const handleKeyDown = (event) => {
    event.preventDefault()
    if (builsPos === 0) {
      setbuilsPos(-94)
    } else {
      setbuilsPos(0)
    }
  }
  const imgSize1 = {
    width: '44px',
    height: '44px',
  }
  const imgSize2 = {
    width: '53px',
    height: '51px',
  }
  const alturaI = {
    height: '489px',
  }
  const text = 'Prime Vault: \nZephyr & \nChroma'
  const text2 = 'TENNOGEN: \nUPDATE 30.1.0'
  return (
    <div style={posicion} className="mainContainer">
      <div className="buildsContainer">
        <div>
          <div className="aContainer">
            <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
              <img style={imgSize1} className="imgCenter" src={PC} alt="Imagen de pc" />
            </a>
          </div>
          <div style={stylePC} className="textDesing">{text2}</div>
          <div className="containBar">
            <div className="barra" style={barraPC} />
            <div className="divisor" style={position1} />
          </div>
          <div style={stylePC} className="textDesing">Live</div>
        </div>
        <hr />
        <div>
          <div className="aContainer">
            <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
              <img style={imgSize2} className="imgCenter" src={Xbox} alt="Imagen de pc" />
            </a>
          </div>
          <div style={styleXbox} className="textDesing">{text}</div>
          <div className="containBar">
            <div className="barra" style={barraXbox} />
            <div className="divisor" style={position2} />
            <div className="divisor" style={position3} />
          </div>
          <div style={styleXbox} className="textDesing">Live</div>
        </div>
        <hr />
        <div>
          <div className="aContainer">
            <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
              <img style={imgSize2} className="imgCenter" src={PS4} alt="Imagen de pc" />
            </a>
          </div>
          <div style={stylePS4} className="textDesing">{text}</div>
          <div className="containBar">
            <div className="barra" style={barraPS4} />
            <div className="divisor" style={position2} />
            <div className="divisor" style={position3} />
          </div>
          <div style={stylePS4} className="textDesing">Live</div>
        </div>
        <hr />
        <div>
          <div className="aContainer">
            <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
              <img className="imgCenter" src={Switch} alt="Imagen de pc" />
            </a>
          </div>
          <div style={styleSwitch} className="textDesing">{text}</div>
          <div className="containBar">
            <div className="barra" style={barraSwitch} />
            <div className="divisor" style={position2} />
            <div className="divisor" style={position3} />
          </div>
          <div style={styleSwitch} className="textDesing">Live</div>
        </div>
      </div>
      <div className="interactuable" onClick={handleKeyDown} role="button">
        <div className="triangle1" />
        <div style={alturaI} className="containerInteractuable">
          <p className="styleP">Warframe Builds</p>
        </div>
        <div className="triangle2" />
      </div>
    </div>
  )
}

export default Build
