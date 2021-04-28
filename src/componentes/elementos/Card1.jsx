import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Card1.css'

const Button = ({
  title, imgsrc, mensaje, styleB,
}) => (
  <div className={styleB}>
    <a className="styleA" href="https://www3.animeflv.net/anime/kakushigoto">
      <div className="imageContainer">
        <img className="imageSize" src={imgsrc} alt="Imagen de la carta 1" />
      </div>
    </a>
    <div className="infoContainer">
      <a className="styleA" href="https://www3.animeflv.net/anime/kakushigoto">
        <div>{title}</div>
      </a>
      <div className="sizeText">{mensaje}</div>
    </div>
    <a className="readStyle" href="https://www3.animeflv.net/anime/kakushigoto">Read More</a>
  </div>
)

Button.propTypes = {
  title: PropTypes.string,
  imgsrc: PropTypes.string.isRequired,
  mensaje: PropTypes.string,
  styleB: PropTypes.string.isRequired,
}

Button.defaultProps = {
  title: 'Predeterminado',
  mensaje: 'Hola',
}

export default Button
