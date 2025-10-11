import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sesion({ setIsAuthenticated, setUsuario }) {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const [formulario, setFormulario] = useState({email: '', pass: ''});

  const manejarEnvio = (e) => {
    e.preventDefault();    
    if (formulario.email && formulario.pass) {
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
    <section>
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarEnvio}>
        <label htmlFor="email">Ingrese su email:</label>
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        <label passwordFor="password">Ingrese su contraseña:</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={formulario.pass}
          onChange={(e) => setFormulario({...formulario, pass: e.target.value})}
          required
        />
        <div>
          <button type="submit">Continuar</button>
          <button type="button" onClick={() => navigate("/galeria")}>Cancelar</button>
        </div>
      </form>
    </section>
  );
}
