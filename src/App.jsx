import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header.jsx";
import Navbar from "./pages/navbar.jsx";
import Inicio from "./pages/inicio.jsx";
import Galeria from "./pages/galeria.jsx";
import DetalleGaleria from "./pages/detalleGaleria.jsx";
import Servicios from "./pages/servicios.jsx";
import Sesion from "./pages/sesion.jsx";
import RutaProtegida from "./pages/rutaProtegida.jsx";
import Pagar from "./pages/pagar.jsx";
import Contacto from "./pages/contacto.jsx";
import Footer from "./pages/footer.jsx";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ email: "", pass: "" });

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />      
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:id" element={<DetalleGaleria />} />
        <Route path="/galeria/:tipo/:id" element={<DetalleGaleria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/login" element={<Sesion
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}
            />
          }
        />
        <Route path="/pagar" element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <Pagar 
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}
              usuario={usuario} />
          </RutaProtegida>
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}
