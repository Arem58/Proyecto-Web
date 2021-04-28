import React from 'react'
import '../../styles/Search.css'
import search from '../../Recursos/searchIcon.png'

const Button = () => (
  <div className="searchPos">
    <img className="imagen" src={search} alt="Imagen de busqueda" />
    <input className="searchBar" type="text" placeholder="Search Warframe News..." />
  </div>
)

export default Button
