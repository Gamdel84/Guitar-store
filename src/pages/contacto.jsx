import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", comentario: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
    <section>
      <div>
        <h2>♪♫ Contacto ♫♪</h2>
        <address>
          Guitar Store — Av. Siempre Viva 742, Buenos Aires<br />
          <a href="mailto:info@guitarstore.com">info@guitarstore.com</a>
        </address>
      </div>

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Dejános tu consulta</legend>

          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre completo..."
              required
              value={form.nombre}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              required
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="comentario">Comentario</label>
            <textarea
              id="comentario"
              name="comentario"
              rows={4}
              placeholder="Contanos qué andas necesitando..."
              required
              value={form.comentario}
              onChange={onChange}
            />
          </div>

          <div>
            <button type="submit" className="botones">Enviar</button>
          </div>
        </fieldset>
      </form>
      <div className='botones'>
        <Link to= "/"><button>Volver al inicio</button></Link>
      </div>
    </section>
    </>
  );
}
