import React from 'react'
import Menu from './Card1Menu'
import '../../styles/Card1.css'

const Card = () => (
  <div className="cardContainer">
    {Menu.map((item) => (
      <div className={item.cName}>
        <a className="styleA" href={item.url}>
          <div className="imageContainer">
            <img className="imageSize" src={item.img} alt="Imagen de la carta 1" />
          </div>
        </a>
        <div className="infoContainer">
          <a className="styleA" href={item.url}>
            <div>{item.title}</div>
          </a>
          <div className={item.mensajeStyle}>{item.mensaje}</div>
        </div>
        <a className="readStyle" href={item.url}>Read More</a>
      </div>
    ))}
  </div>
)

export default Card
