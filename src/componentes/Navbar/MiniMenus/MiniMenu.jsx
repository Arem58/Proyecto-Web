/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/Navbar.css'

const Navbar = ({ menu }) => {
  if (menu !== null) {
    return (
      <div className="sub-menu">
        <ul className="dropMenu">
          {menu.map((item) => (
            <li className="listaMenu" key={item.key}>
              <a className="nav-links-mini" href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (null)
}

Navbar.propTypes = {
  menu: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Navbar
