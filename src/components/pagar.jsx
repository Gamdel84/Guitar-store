// src/components/Pagar.jsx
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

export default function Pagar() {
  const { usuario } = useAuthContext();
  const { carrito, vaciarCarrito, total } = useCartContext();
  const navigate = useNavigate();

  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito();
    navigate("/galeria");
  };

  if (!carrito.length) {
    return (
      <div className="contenedor-pago">
        <h2>No hay productos en el carrito</h2>
        <button onClick={() => navigate("/galeria")}>Volver a la galería</button>
      </div>
    );
  }

  return (
    <div className="contenedor-pago">
      <h2>Revisión de compra</h2>

      {usuario && (
        <p>
          Comprador: <strong>{usuario.nombre}</strong> ({usuario.email})
        </p>
      )}

      <div className="lista-pago">
        <hr />
        {carrito.map((g) => (
          <div key={g.id} className="item-pago">
            <p>{g.marca} {g.modelo}</p>
            <p>Cantidad: {g.cantidad}</p>
            <p>Precio unitario: u$s{g.precio}</p>
          </div>
        ))}
        <h3>Total a pagar: u$s{total}</h3>
      </div>

      <div className="acciones-pago">
        <button onClick={comprar} className="botones">
          Confirmar y pagar
        </button>
        <button
          onClick={() => navigate("/galeria")}
          className="botones"
        >
          Seguir comprando
        </button>
      </div>
    </div>
  );
}
