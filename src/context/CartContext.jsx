// src/context/CartContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const idx = prev.findIndex((p) => String(p.id) === String(producto.id));
      if (idx > -1) {
        const copia = [...prev];
        copia[idx] = {
          ...copia[idx],
          cantidad: (copia[idx].cantidad || 1) + 1,
        };
        return copia;
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const agregarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((p) =>
        String(p.id) === String(id)
          ? { ...p, cantidad: (p.cantidad || 1) + 1 }
          : p
      )
    );
  };

  const quitarCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          String(p.id) === String(id)
            ? { ...p, cantidad: (p.cantidad || 1) - 1 }
            : p
        )
        .filter((p) => (p.cantidad || 0) > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce(
    (acc, p) => acc + (Number(p.precio) || 0) * (p.cantidad || 1),
    0
  );

  const value = useMemo(
    () => ({
      carrito,
      agregarAlCarrito,
      agregarCantidad,
      quitarCantidad,
      vaciarCarrito,
      total,
    }),
    [carrito, total]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCartContext debe usarse dentro de CartProvider");
  }
  return ctx;
}


