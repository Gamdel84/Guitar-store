import React from 'react'
import Carousel from '../components/carousel.jsx'

function inicio() {
  return (
    <>
      <h2>♪♫ Bienvenidos al mundo de las cuerdas ♫♪</h2>
      <div className="cont-inicio">
        <div className='cont-torres'>
          <img src="/img/torre_izq1.png" alt="Torre de parlantes" className='torres' />
          <Carousel />
          <img src="/img/torre_der1.png" alt="Torre de parlantes" className='torres' />
        </div>
      
        <p>
        Llegaste al lugar indicado. <br />
        Tenemos todo lo que un músico necesita en su sala. Comunicate con nosotros a traves de nuestros medio de contacto. Visita nuestra galeria con las guitarras que usan los mas grandes del mundo de las cuerdas. <br />
        También podes registrarte, accede a nuestro sistema de suma de puntos y podes participar de sorteos y beneficios, que solo un lugar como Guitar Store te puede ofrecer.
        </p>
      
      
      </div> 
    </>
  )
}

export default inicio