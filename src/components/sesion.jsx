import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export default function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const { setIsAuthenticated, setUsuario } = useAppContext();

  const [formulario, setFormulario] = useState({nombre: '', email: '', pass: ''});

  const manejarEnvio = (e) => {
    e.preventDefault();    
    if (formulario.nombre && formulario.email && formulario.pass) {
      setIsAuthenticated(true);
      setUsuario(formulario);

      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/galeria");
      }
    } else {
      alert('Es necesario iniciar sesión para continuar');
    }
  };

  return (
    <>
    <div className="sesion">
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarEnvio}>
        <label htmlFor="name">Ingrese su nombre:</label>
        <input  
          type="text"
          placeholder="Nombre completo..."
          value={formulario.nombre}
          onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
          required
        />
        <label htmlFor="email">Ingrese su email:</label>
        <input
          type="email"
          placeholder="tu@correo.com"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        <label passwordFor="password">Ingrese su contraseña:</label>
        <input
          type="password"
          placeholder="Tu contraseña..."
          value={formulario.pass}
          onChange={(e) => setFormulario({...formulario, pass: e.target.value})}
          required
        />
        <div>
          <button type="submit">Continuar</button>
          <button type="button" onClick={() => navigate("/galeria")}>Cancelar</button>
        </div>
      </form>
    </div>
    </>
  );
}
