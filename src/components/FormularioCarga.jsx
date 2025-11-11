// src/components/FormularioCarga.jsx
import { useState } from "react";

export default function FormularioProducto({ onAdd }) {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    precio: "",
    tipo: "",
    avatar: "",
  });
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.marca || !form.modelo || !form.precio) return;

    setCargando(true);
    const nuevo = {
      id: crypto.randomUUID(),
      ...form,
      precio: Number(form.precio),
    };
    onAdd?.(nuevo);
    setForm({ marca: "", modelo: "", precio: "", tipo: "", avatar: "" });
    setCargando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-admin">
      <label>Marca* <input name="marca" value={form.marca} onChange={handleChange} required /></label>
      <label>Modelo* <input name="modelo" value={form.modelo} onChange={handleChange} required /></label>
      <label>Precio (u$s)* <input name="precio" type="number" value={form.precio} onChange={handleChange} required /></label>
      <label>Tipo <input name="tipo" value={form.tipo} onChange={handleChange} /></label>
      <label>URL de imagen <input name="avatar" value={form.avatar} onChange={handleChange} /></label>
      <button type="submit" disabled={cargando}>
        {cargando ? "Agregando..." : "Agregar Producto"}
      </button>
      <p>(*) Campos obligatorios</p>
    </form>
  );
}
