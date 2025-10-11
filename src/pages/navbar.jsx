import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
        <div className="cuerdas">
            <hr />
            <hr />
            <hr />
            
        </div>
        
      <ul id= "navegacion">
        <li>
            <Link to="/">Inicio</Link>
        </li>

        <li>
            <Link to="/galeria">Galeria</Link>
        </li>
        <li>
            <Link to="/servicios">Servicios</Link>
        </li>
        <li>
            <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
        <div className="cuerdas">
            <hr />
            <hr />
            <hr />
            
        </div>
    </nav>
  )
}

export default Navbar