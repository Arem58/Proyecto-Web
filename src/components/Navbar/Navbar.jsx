import React from 'react'
import Logo from '../../assets/headerLogo.png'
import Menu from './Menu'
import Options from './GameOp'
import Mini from './MiniMenus/MiniMenu'
import '../../styles/Navbar.css'

const Navbar = () => (
  <nav className="Navbar">
    <a href="*" className="logo-container">
      <img src={Logo} alt="Logo de warframe" className="logo" />
    </a>
    <ul className="nav-main-menu">
      {Menu.map((item) => (
        <div className="hoverNav">
          <li key={item.key}>
            <div className="size_b">
              <a className={item.cName} href={item.url}>{item.title}</a>
            </div>
            <Mini menu={item.menu} />
          </li>
        </div>
      ))}
    </ul>
    <ul className="nav-main-menu-esquina">
      {Options.map((item) => (
        <div className="hoverNav">
          <li key={item.key}>
            <div className="size_b">
              <a className={item.cName} href={item.url}>{item.title}</a>
            </div>
            <Mini menu={item.Menu} />
          </li>
        </div>
      ))}
    </ul>
    <a className="redCube" href="https://www3.animeflv.net/anime/shadows-house">
      <div className="style_menu">play free now</div>
    </a>
  </nav>
)

export default Navbar
