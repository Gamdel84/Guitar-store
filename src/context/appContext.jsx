import React, { createContext, useState, useContext } from 'react'

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({nombre: "", email: "", pass: "" });
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (g) => {
  setCarrito([...carrito, g]);
  alert(`${g.marca} agregada`);
  };

  const vaciarCarrito = () => {
  setCarrito([]);
  };
  
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

    const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ email: "", pass: "" });
  };

  const value = { 
    isAuthenticated, 
    setIsAuthenticated, 
    usuario, 
    setUsuario, 
    carrito, 
    setCarrito,
    agregarAlCarrito, 
    vaciarCarrito, 
    quitarCantidad, 
    cerrarSesion };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
  };

  export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used within a AppProvider");
    }
    return context;
  };

  
  

