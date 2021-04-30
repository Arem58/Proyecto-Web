import React from 'react'
import '../../../sass/slider.css'
import '../../styles/Card2.css'
import Menu from './Card1Menu'

const Button = () => {
  const conPadd = {
    padding: '0',
    boxSizing: 'border-box',
  }
  const paddinTitlle = {
    lineHeight: 'normal',
    color: '#212121',
    margin: '0',
  }
  const description = {
    borderTop: '1px solid #a0a0a0',
    lineHeight: '2em',
    padding: '5px 0',
    fontWeight: 'normal',
  }
  const marginContainer = {
    marginLeft: '4%',
  }
  return (
    <div>
      {Menu.map((item) => (
        <div className="cardStyle">
          <div style={conPadd} className="container">
            <div className="row">
              <div className="col-5">
                <div className="imageContainer">
                  <img className="imageSize" src={item.img} alt="Imagen de la carta 1" />
                </div>
              </div>
              <div className="col-7">
                <div style={marginContainer} className="infoContainer">
                  <a style={paddinTitlle} className="styleA" href="https://www3.animeflv.net/anime/kakushigoto">
                    <div>{item.title}</div>
                  </a>
                  <div className="styleData">{item.data}</div>
                  <div style={description} className="sizeText">{item.mensaje}</div>
                  <a className="readMore" href="https://www3.animeflv.net/anime/kakushigoto">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Button
