import React from 'react'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'
import slide2 from '../../Recursos/slide2.jpg'
import slide3 from '../../Recursos/slide3.jpg'
import '../../../sass/custom.css'
import '../../styles/style.css'

const Slider = () => {
  const img1 = {
    backgroundImage: `url(${slide2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '100%',
  }
  const img2 = {
    backgroundImage: `url(${slide3})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '100%',
  }
  const vid1 = {
    width: '100%',
  }
  const vid2 = {
    height: '100%',
  }
  const postionP = {
    position: 'relative',
    backgroundColor: '#212121',
  }

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
      <div className="carousel-indicators">
        <div style={postionP}>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5" />
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="video-fluid" autoPlay loop muted style={vid1}>
            <source src="http://n9e5v4d8.ssl.hwcdn.net/images/promo/tempestarii/info/keyart.webm" type="video/webm" />
          </video>
        </div>
        <div className="carousel-item" style={img1}>
          <div style={{ style: "position: 'absolute'" }}>
            hola
          </div>
        </div>
        <div className="carousel-item" style={img2}>
          <div style={{ style: "position: 'absolute'" }}>
            hola
          </div>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" autoPlay loop muted style={vid2}>
            <source src="http://n9e5v4d8.ssl.hwcdn.net/repos/WF_OctaviaPrimeAccess_WebNews_3840x1040.webm" type="video/webm" />
          </video>
        </div>
        <div className="carousel-item">
          <video className="video-fluid" src="http://n9e5v4d8.ssl.hwcdn.net/repos/WF_BansheeMirage_PrimeVault_Rotator_1920x520.webm" autoPlay loop muted style={vid2} />
        </div>
      </div>
    </div>
  )
}

export default Slider
