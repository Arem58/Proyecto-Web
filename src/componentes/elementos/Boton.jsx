import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/boton.css'

const Button = ({ title, styleB }) => (
  <a href="https://www3.animeflv.net/anime/gakuen-babysitters" className={styleB}>{title}</a>
)

Button.propTypes = {
  title: PropTypes.string,
  styleB: PropTypes.string,
}

Button.defaultProps = {
  title: 'Predeterminado',
  styleB: 'boton',
}

export default Button
