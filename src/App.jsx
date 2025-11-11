import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Galeria from "./pages/Galeria.jsx";
import DetalleGaleria from "./pages/DetalleGaleria.jsx";
import Servicios from "./pages/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx";
import IniciarSesion from "./components/Sesion.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import RutaProtegida from "./components/RutaProtegida.jsx";
import Pagar from "./components/Pagar.jsx";
import FormularioProducto from "./components/formularioCarga.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {


  return (
    <>
    <AuthProvider>
      <CartProvider>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />      
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:id" element={<DetalleGaleria />} />
        <Route path="/galeria/:tipo/:id" element={<DetalleGaleria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<IniciarSesion/>}/>
        <Route path="/pagar" element={
          <RutaProtegida>
            <Pagar/>
          </RutaProtegida>
        }/>
        <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida>}/>
        <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
      </Routes>
      <Footer />
      </CartProvider>
    </AuthProvider>
    </>
  );
}
