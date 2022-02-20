import "../src/css/Header.css";

const Header = () => {
  return (
    <header className="header pc">
      <div className="home">
        <img className="img-portada" src="../src/img/bg.jpg" alt="" />
        <div className="texto">
          <h1>
            ¡HOLA! SOY EMILIO SUÁREZ Y SOY
            <span>DISEÑADOR WEB/UI</span> .
          </h1>
        </div>
        <a className="btn-home" href="http://google.es">
          Ver proyectos
        </a>
      </div>
    </header>
  );
};

export default Header;
