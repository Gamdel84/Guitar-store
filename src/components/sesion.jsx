// src/components/Sesion.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ nombre: "", email: "", pass: "" });

  const from = location.state?.from?.pathname || "/";

  const manejarEnvio = (e) => {
    e.preventDefault();
    const { nombre, email, pass } = form;

    // Admin hardcodeado
    if (nombre === "admin" && email === "admin@admin" && pass === "admin") {
      iniciarSesion({ nombre: "Admin", email, rol: "admin" });
      return navigate("/dashboard", { replace: true });
    }

    // Usuario normal
    iniciarSesion({ nombre, email, rol: "user" });
    navigate(from, { replace: true });
  };

  return (
    <div className="cont-form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={form.pass}
          onChange={(e) => setForm({ ...form, pass: e.target.value })}
          required
        />
        <div className="botones">
          <button type="submit">Continuar</button>
          <button type="button" onClick={() => navigate("/galeria")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
