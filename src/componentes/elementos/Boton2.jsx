import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/boton.css'

const Button = ({ title }) => (
  <div className="centerBu">
    <button type="button" className="stylebutton2">
      <span className="textsTyle">{title}</span>
    </button>
  </div>
)

Button.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  title: 'Predeterminado',
}

export default Button
