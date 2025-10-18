import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/appContext.jsx";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Inicio from "./pages/inicio.jsx";
import Galeria from "./pages/galeria.jsx";
import DetalleGaleria from "./pages/detalleGaleria.jsx";
import Servicios from "./pages/servicios.jsx";
import IniciarSesion from "./components/sesion.jsx";
import RutaProtegida from "./components/rutaProtegida.jsx";
import Pagar from "./components/pagar.jsx";
import Contacto from "./pages/contacto.jsx";
import Footer from "./components/footer.jsx";
import Arriba from "./components/arriba.jsx";

export default function App() {


  return (
    <>
    <AppProvider>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />      
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:id" element={<DetalleGaleria />} />
        <Route path="/galeria/:tipo/:id" element={<DetalleGaleria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/login" element={<IniciarSesion/>}/>
        <Route path="/pagar" element={
          <RutaProtegida>
            <Pagar/>
          </RutaProtegida>
        }/>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Arriba />
      <Footer />
    </AppProvider>
    </>
  );
}
