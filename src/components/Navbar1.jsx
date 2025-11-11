// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

export default function Navbar() {
  const { isAuthenticated, usuario, isAdmin, cerrarSesion } = useAuthContext();
  const { carrito } = useCartContext();
  const navigate = useNavigate();

  const count = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  const irAlPagar = () => {
    navigate('/pagar');
  };

  return (
    <>
      <nav>
        <div className="cuerdas">
          <hr /><hr /><hr />
        </div>
        <ul id="navegacion">
          <li><Link to="/">&#119070; Inicio</Link></li>
          <li><Link to="/galeria">&#119070; Galeria</Link></li>
          <li><Link to="/servicios">&#119070; Servicios</Link></li>
          <li><Link to="/contacto">&#119070; Contacto</Link></li>

          {isAdmin && (
            <>
              <li><Link to="/dashboard">&#119070; Dashboard</Link></li>
              <li><Link to="/agregar-producto">&#119070; Agregar producto</Link></li>
            </>
          )}

          <li>
            {isAuthenticated ? (
              <div className="nav-user">
                <button onClick={cerrarSesion} className="btn-cl-sesion">
                  Cerrar Sesión
                </button>
                <button className="btn-cart" onClick={irAlPagar}>
                  <img
                    className="logo-carrito"
                    src="/img/carrito_bl.png"
                    alt="Carrito"
                  />
                  <span className="carrito-cont">{count}</span>
                </button>
              </div>
            ) : (
              <Link to="/login">&#119070; Iniciar Sesión</Link>
            )}
          </li>
        </ul>
        <div className="cuerdas">
          <hr /><hr /><hr />
        </div>
      </nav>

      {isAuthenticated && usuario?.nombre && (
        <p className="hello-user">
          Bienvenido <b className="user-log">{usuario.nombre}</b> a Guitar Store
        </p>
      )}
    </>
  );
}

