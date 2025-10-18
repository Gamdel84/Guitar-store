import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, setCarrito } = useAppContext();
  const navigate = useNavigate();


  const irAPagar = () => {
    navigate('/pagar', { state: { carrito } }); 
  }

  const quitarCantidad = (idg) => {
    const carritoActualizado = carrito.map(g => {
      if (g.id === idg) {
        const cantidadActual = g.cantidad || 1;
        if (cantidadActual === 1) {
          return null;
        }
        return { ...g, cantidad: cantidadActual - 1 };
      }
      return g;
    }).filter(g => g !== null);

    setCarrito(carritoActualizado);
  };

    const agregarCantidad = (idg) => {
    const nuevoCarrito = carrito.map(g => {
      if (g.id === idg) {
        return {...g, cantidad: (g.cantidad || 1) + 1};
      }
      return g;
    });
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((sum, item) => {
    const cantidad = item.cantidad || 1;
    return sum + (Number(item.precio) * cantidad);
  }, 0);

  return (
    <>  
    <h2>Carrito de Compras</h2>
    <hr />
    <div className='carrito'>
        {carrito.length === 0 ? (
        <p className='carrito-vacio'>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id} className='item-carrito'>
                <h3>{item.marca}</h3>
                <p>{item.modelo}</p>
                <p>{item.tipo}</p>

                <p>
                  u$s{Number(item.precio).toFixed(2)}
                </p>

                <p> 
                Cantidad:  {item.cantidad || 1}
                </p>
                <div>
                  <img src={item.avatar} alt={item.marca} width="30%" />
                </div>

                <div className='botones-cantidad'>
                  <button onClick={() => quitarCantidad(item.id)}>-</button>
                  <button onClick={() => agregarCantidad(item.id)}>+</button>
                </div>

            </div>
          ))}

          <div>
            <hr />
            <p className='total'>Monto parcial: u$s{Number(total).toFixed(2)}</p>
          </div>
          <div className='botones'>
            <button onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <button onClick={irAPagar}>
              Comprar
            </button>
          </div>
          
        </>
      )}
    </div>
    </>
  );
}
