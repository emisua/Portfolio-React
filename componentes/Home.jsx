import "../src/css/Home.css";
import Btn from "./Btn";

const Home = () => {
  return (
    <header className="header pc">
      <div className="home">
        <img className="img-portada" src="../src/img/bg.jpg" alt="" />
        <div className="texto p1">
          <h1 className="flex column">
            ¡HOLA! SOY EMILIO SUÁREZ Y SOY
            <span className="featured">DISEÑADOR WEB/UI</span>.
          </h1>
          <Btn className="code" url="https://google.es">
            Ver proyectos
          </Btn>
        </div>
      </div>
    </header>
  );
};

export default Home;
