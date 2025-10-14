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
            <Link to="/">&#119070; Inicio</Link>
        </li>

        <li>
            <Link to="/galeria">&#119070; Galeria</Link>
        </li>
        <li>
            <Link to="/servicios">&#119070; Servicios</Link>
        </li>
        <li>
            <Link to="/contacto">&#119070; Contacto</Link>
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