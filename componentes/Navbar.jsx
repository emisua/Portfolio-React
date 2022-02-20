import "../src/css/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
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

  const [dropdown, setDropdown] = useState(false);
  // Si esta abierto se cierra o viceversa, como un toggle.
  const cambiarDropdown = () => setDropdown(!dropdown);

  return (
    <nav
      className={
        isMobile
          ? dropdown
            ? // Es movil con dropdown abierto
              "navbar mobile menuopen"
            : // Es movil con dropdown cerrado
              "navbar mobile menuclosed"
          : // Es pc
            "navbar pc container"
      }
    >
      <img src="../src/img/logo.svg" alt="" className="logo" />
      <ul>
        <a>
          <li>Sobre mí</li>
        </a>
        <a>
          <li>Proyectos</li>
        </a>
        <a>
          <li>Trabajos</li>
        </a>
        <a>
          <li>Contacta</li>
        </a>
      </ul>
      <button onClick={cambiarDropdown} className="nav-button">
        <img
          src={!dropdown ? "../src/img/menu.svg" : "../src/img/close.svg"}
          alt=""
        />
      </button>
    </nav>
  );
};

export default Navbar;
