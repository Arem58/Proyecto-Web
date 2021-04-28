import React from 'react'
import '../../styles/Build.css'
import PC from '../../Recursos/pcGrey.png'
import Xbox from '../../Recursos/xb1.png'
import PS4 from '../../Recursos/ps4.png'
import Switch from '../../Recursos/switch.png'

const Build = () => (
  <div className="mainContainer">
    <div className="buildsContainer">
      <div className="aContainer">
        <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
          <img className="imgSize" src={PC} alt="Imagen de pc" />
        </a>
      </div>
      <hr />
      <div className="aContainer">
        <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
          <img className="imgSize" src={Xbox} alt="Imagen de pc" />
        </a>
      </div>
      <hr />
      <div className="aContainer">
        <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
          <img className="imgSize" src={PS4} alt="Imagen de pc" />
        </a>
      </div>
      <hr />
      <div className="aContainer">
        <a className="aSize" href="https://www3.animeflv.net/anime/mushoku-tensei-isekai-ittara-honki-dasu">
          <img className="imgSize" src={Switch} alt="Imagen de pc" />
        </a>
      </div>
    </div>
  </div>
)

export default Build
