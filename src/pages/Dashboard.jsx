// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import FormularioProducto from "../components/FormularioCarga.jsx";

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();
  const [productos, setProductos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("adminProductos")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("adminProductos", JSON.stringify(productos));
  }, [productos]);

  const handleAdd = (nuevo) => {
    setProductos((prev) => [...prev, nuevo]);
  };

  if (!usuario) return null;

  return (
    <div className="dashboard">
      <h1>Dashboard Administrativo</h1>
      <p>Hola, {usuario.nombre} ({usuario.email})</p>

      <section>
        <h2>Cargar nuevo producto</h2>
        <FormularioProducto onAdd={handleAdd} />
      </section>

      <section>
        <h2>Productos cargados</h2>
        {productos.length === 0 ? (
          <p>No hay productos cargados aún.</p>
        ) : (
          <ul>
            {productos.map((p) => (
              <li key={p.id}>
                {p.marca} {p.modelo} — u$s{p.precio}
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="acciones-dashboard">
        <Link to="/galeria">Ir a la galería</Link>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </div>
    </div>
  );
}
