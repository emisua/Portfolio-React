import "../src/css/Colores.css";
import "../src/css/App.css";
import Navbar from "../componentes/Navbar";
import Header from "../componentes/Header";
import Proyectos from "../componentes/Proyectos";
import SobreMi from "../componentes/SobreMi";
import Contacto from "../componentes/Contacto";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function comprobarAnchoVentana() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", comprobarAnchoVentana);
    return () => {
      window.removeEventListener("resize", comprobarAnchoVentana);
    };
  }, []);

  // Establecer ancho para pantallas mobile
  const isMobile = width <= 650;

  return (
    <main className={isMobile ? "Portfolio mobile" : "Portfolio"}>
      <Navbar />
      <Header />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </main>
  );
}

export default App;
