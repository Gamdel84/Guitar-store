// src/components/Carrito.jsx
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total } = useCartContext();
  const navigate = useNavigate();

  const irAPagar = () => navigate('/pagar');

  if (!carrito.length) {
    return <div className="carrito-cont">No hay productos en el carrito.</div>;
  }

  return (
    <div className="carrito-cont">
      {carrito.map((item) => (
        <div key={item.id} className="prod-carrito">
          <p>{item.marca} {item.modelo}</p>
          <p>u$s{item.precio}</p>
          <p>Cantidad: {item.cantidad}</p>
          <button onClick={() => quitarCantidad(item.id)}>-</button>
          <button onClick={() => agregarCantidad(item.id)}>+</button>
        </div>
      ))}
      <h3>Total: u$s{total}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <button onClick={irAPagar}>Comprar</button>
    </div>
  );
}

