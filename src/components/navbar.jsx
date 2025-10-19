import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';


export default function Navbar() {
  const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();
  return (
   <> 
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
        <li>
          {isAuthenticated ? (
            <div className='nav-user'>
              <li><button onClick={cerrarSesion}>Cerrar Sesión</button></li>              
              <li><img className='logo-carrito' src="../img/carrito_bl.png" alt="carrito del nav" /><span className='carrito-cont'>{carrito.length}</span></li>                        
            </div>
          ) : (
            <Link to="/login">&#119070; Iniciar Sesión</Link>
          )}
        </li>
      </ul>
        <div className="cuerdas">
            <hr />
            <hr />
            <hr />
            
        </div>
    </nav>
    <p className='hello-user'>{isAuthenticated && usuario?.nombre && (
    <p className="hello-user">Bienvenido <b className='user-log'>{usuario.nombre}</b> a Guitar store</p>)}</p>
    </>
  )
}

