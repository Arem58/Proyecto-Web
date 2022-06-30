import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/boton.css'

const Button2 = ({ title }) => (
  <div className="centerBu">
    <button type="button" className="stylebutton2">
      <span className="textsTyle">{title}</span>
    </button>
  </div>
)

Button2.propTypes = {
  title: PropTypes.string,
}

Button2.defaultProps = {
  title: 'Predeterminado',
}

export default Button2
