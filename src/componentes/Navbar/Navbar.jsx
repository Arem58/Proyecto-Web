import React from 'react'
import Logo from '../../Recursos/headerLogo.png'
import Menu from './Menu'
import Options from './GameOp'
import '../../styles/Navbar.css'

const Navbar = () => (
  <nav className="Navbar">
    <a href="*" className="logo-container">
      <img src={Logo} alt="Logo de warframe" className="logo" />
    </a>
    <ul className="nav-main-menu">
      {Menu.map((item) => (
        <li key={item.key}>
          <a className={item.cName} href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
    <div className="paLa_esquina">
      <ul className="nav-main-menu">
        {Options.map((item) => (
          <li key={item.key}>
            <a className={item.cName} href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default Navbar
