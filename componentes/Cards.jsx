import proyectos from "../src/proyectos.json";
import { useEffect, useState } from "react";
import "../src/css/Card.css";

const Cards = () => {
  const categorias = {
    // nombre: estado que va a cambiar al filtrar
    kadence: proyecto.tags.includes("Kadence"),
    wordpress: proyecto.tags.includes("Wordpress"),
    all: proyecto,
  };
  const [categoriaActiva, setCategoriaActiva] = useState(categorias.kadence);

  useEffect(() => {
    setCategoriaActiva(categorias.kadence);
  });

  //Si hubiera que filtrar por categoría se aplica filtrar"categoria" y se cambia proyectos por la constante en el map. Se podría hacer mediante setState y que el state sea el valor a filtrar, "all", "kadence", "wordpress"... etc
  const filtrar = proyectos.filter((proyecto) => categorias.categoriaActiva);

  return filtrar.map((proyecto, index) => (
    <div className="card" key={index}>
      <a href={proyecto.url}>
        <div className="img">
          <img src={proyecto.img.poster} alt="" />
        </div>
        <div className="content">
          <div className="tags">
            {proyecto.tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
          <h4 className="title">{proyecto.nombre}</h4>
          <div className="desc">{proyecto.desc[0]}</div>
        </div>
      </a>
    </div>
  ));
};

export default Cards;

{
  proyectos.filter((proyecto) => {
    proyecto.tags.includes("Kadence");
  });
}
