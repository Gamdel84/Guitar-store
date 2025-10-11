import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", comentario: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section>
      <header>
        <h2 id="titulo-contacto">Contacto</h2>
        <address>
          Guitar Store — Av. Siempre Viva 742, Buenos Aires<br />
          <a href="mailto:info@guitarstore.com">info@guitarstore.com</a>
        </address>
      </header>

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Dejanos tu consulta</legend>

          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
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
              placeholder="¿En qué podemos ayudarte?"
              required
              value={form.comentario}
              onChange={onChange}
            />
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </fieldset>
      </form>

    </section>
  );
}
