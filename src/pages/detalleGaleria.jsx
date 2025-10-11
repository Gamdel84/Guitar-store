import { Link, useParams, useLocation } from "react-router-dom";

export default function DetalleGaleria() {
    const { id } = useParams();
    const location = useLocation();
    const g = location.state?.g;

    if (!g) {
    return (
      <div>
        <p>No esta enchufada</p>
        <Link to="/galeria">
          <button>Volver a Galeria</button>
        </Link>
      </div>
    );
  }

  return (
    <>
    <h3>Detalles del Producto {id}</h3>
    <ul className="details-container">
        <li key={g.id} className="card-details">
            <h2>{g.marca}</h2>
            <br />
            <p>{g.modelo}</p>
            <p>${g.precio}</p>
            <img src={g.avatar} alt={g.marca} width="30%" />
        </li>
        <hr />
        <p>
          <Link to={`/galeria`}><button>Volver a Galeria</button></Link>
        </p>

    </ul>
    </>
  );
}
