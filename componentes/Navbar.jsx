import "../src/css/Navbar.css";
import { useState } from "react";

const Navbar = (props) => {
  const [dropdown, setDropdown] = useState(false);
  // Si esta abierto se cierra o viceversa, como un toggle.
  const cambiarDropdown = () => setDropdown(!dropdown);

  return (
    <nav
      className={
        props.isMobile
          ? dropdown
            ? // Es móvil con dropdown abierto
              "navbar dropdown open"
            : // Es móvil con dropdown cerrado
              "navbar dropdown closed"
          : "navbar container"
      }
    >
      <div className="logo-zone">
        <img src="../src/img/logo.svg" alt="" className="logo" />
        <div className="texto code">
          <span className="name">Emilio Suárez</span>
          <span className="desc">Frontend developer</span>
        </div>
      </div>
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
        <img src={!dropdown ? "../src/img/menu.svg" : "../src/img/close.svg"} />
      </button>
    </nav>
  );
};

export default Navbar;
