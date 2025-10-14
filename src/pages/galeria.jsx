import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "../components/carrito";

const API_URL = "https://68e033f693207c4b4793f5d0.mockapi.io/api/guitars";

export default function Galeria() {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((e) => {
        console.error(e);
        setError("No se pudo cargar la galería");
      })
      .finally(() => setCargando(false));
  }, []);

   const agregarAlCarrito = (g) => {
    setCarrito([...carrito, g]);
    alert(`${g.marca} agregada`);
  }

  if (cargando) return <p>Cargando…</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>♪♫ Galeria de compras ♫♪</h2>
      <ul className="cards-container">
        {items.map((g) => (
          <li key={g.id} className="cards">
            <span>{g.marca || "Sin marca"}</span>
            <p>{g.modelo || "Faltan detalles"}</p>
            <p>
              u$s{g.precio || "sin precio"}
            </p>            
            <p>{g.tipo || "Sin especificar"}</p>
              <img
                src={g.avatar}
                alt={g.marca || g.modelo || "Producto"}
              />
            <p>
              {/* Link corregido: usa /galeria/:id y pasa state */}
              <Link to={`/galeria/${g.id}`} state={{ g }}>
                <button>Ver detalle</button>
              </Link>
              <button onClick={() => agregarAlCarrito(g)}>Comprar</button>
            </p>
          </li>
        ))}
      </ul>
      <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
      <div className='botones'>
        <Link to= "/"><button>Volver al inicio</button></Link>
      </div>
    </>
  );
}
