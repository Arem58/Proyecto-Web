import React from 'react'
import '../../styles/boton.css'
import Menu from './socialMenu'

const Social = () => {
  const socialContainer = {
    marginTop: '5px',
    marginBottom: '13px',
    textAlign: 'center',
  }
  /*
  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  */
  const imgSize = {
    height: '34px',
    width: '34px',
  }
  const astyle = {
    marginRight: '10px',
  }
  return (
    <div style={socialContainer}>
      {Menu.map((item) => (
        <a style={astyle} href={item.url}>
          <img style={imgSize} src={item.menu} alt="imagen de red social" />
        </a>
      ))}
    </div>
  )
}

export default Social
