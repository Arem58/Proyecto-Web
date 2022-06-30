import React from 'react'
import '../../styles/Search.css'
import search from '../../assets/searchIcon.png'

const Search = () => (
  <div className="searchPos">
    <img className="imagen" src={search} alt="Imagen de busqueda" />
    <input className="searchBar" type="text" placeholder="Search Warframe News..." />
  </div>
)

export default Search
