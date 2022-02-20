import Cards from "./Cards";
import "../src/css/Proyectos.css";
import Title from "./Title";

const Proyectos = () => {
  return (
    <section className="proyectos bloque">
      <div className="container">
        <Title title="Proyectos"></Title>
      </div>
      <div className="container">
        <div className="card-block">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
