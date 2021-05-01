import React from 'react'
import '../../styles/Card1.css'
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
import '../../styles/Footer.css'
import Menu from './warframe'
import Menu2 from './Account'
import Menu3 from './Community'
import Menu4 from './Support'

const Card = () => {
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
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h4 className="h4Style">Warframe</h4>
          <ul className="footerUl">
            {Menu.map((item) => (
              <li className="footerLi" key={item.key}>
                <a className="footerA" href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <h4 className="h4Style">Account</h4>
          <ul className="footerUl">
            {Menu2.map((item) => (
              <li className="footerLi" key={item.key}>
                <a className="footerA" href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <h4 className="h4Style">Communuty</h4>
          <ul className="footerUl">
            {Menu3.map((item) => (
              <li className="footerLi" key={item.key}>
                <a className="footerA" href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <h4 className="h4Style">Support</h4>
          <ul className="footerUl">
            {Menu4.map((item) => (
              <li className="footerLi" key={item.key}>
                <a className="footerA" href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <div className="row mb-2">
            <div className="col-7">
              <div className="row">
                <div className="col-1 ms-1 me-1">
                  <img src={Pc} alt="Imagen de plataforma de juego" />
                </div>
                <div className="col-4 ms-2 me-2">
                  <img src={ps4} alt="Imagen de plataforma de juego" />
                </div>
                <div className="col-4 ms-3 me-1">
                  <img src={ps5} alt="Imagen de plataforma de juego" />
                </div>
                <div className="col-3 ms-1 me-4">
                  <img src={xbox} alt="Imagen de plataforma de juego" />
                </div>
                <div className="col-5 ms-4">
                  <img src={xboxl} alt="Imagen de plataforma de juego" />
                </div>
              </div>
            </div>
            <div className="col-2 ms-3">
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
  )
}

export default Card
