import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export default function Pagar() {
  const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
  const navigate = useNavigate();


  // Calculo del total
  const total = carrito.reduce(
    (suma, g) => suma + Number(g.precio),
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito();
    navigate("/galeria");
  };

  return (
    <div>
      <div>
        <h2>{usuario.nombre}</h2>
        <hr />
      </div>

      <div>
        <h2>Tu compra:</h2>

        {carrito.map((g) => (
          <div key={g.id} className="carrito-a-pagar">
            <img src={g.avatar} alt={g.marca} width="60" />
            <span>{g.marca}</span>
            <p>{g.modelo}</p>
            <p>{g.tipo}</p>
            <p>u$s{g.precio}</p>
          </div>
        ))}

        <h3>Total a pagar: u$s{total}</h3>
      </div>

      <div>
        <button onClick={comprar} className="botones">Confirmar y Pagar</button>
        <button onClick={() => navigate("/galeria")} className="botones">Cancelar</button>
      </div>
    </div>
  );
}
