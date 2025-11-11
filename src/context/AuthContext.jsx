// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Cargar desde localStorage al inicio
  useEffect(() => {
    try {
      const raw = localStorage.getItem("usuario");
      if (raw) setUsuario(JSON.parse(raw));
    } catch {
      localStorage.removeItem("usuario");
    }
  }, []);

  // Guardar cambios
  useEffect(() => {
    if (usuario) localStorage.setItem("usuario", JSON.stringify(usuario));
    else localStorage.removeItem("usuario");
  }, [usuario]);

  const iniciarSesion = ({ nombre, email, rol }) => {
    setUsuario({ nombre, email, rol });
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  const isAuthenticated = !!usuario;
  const isAdmin = usuario?.rol === "admin";

  const value = useMemo(
    () => ({ usuario, isAuthenticated, isAdmin, iniciarSesion, cerrarSesion }),
    [usuario, isAuthenticated, isAdmin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  return ctx;
}

