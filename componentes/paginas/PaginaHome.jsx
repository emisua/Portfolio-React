import "../../src/css/Home.css";
import Btn from "../Btn";
import BlurredBlob from "../BlurredBlob";
import Text from "../Text";
import Title from "../Title";

const parrafo1 =
  "De pequeño me gustaba mucho dibujar y sacaba buenas notas en ello. Hice el Bachiller de artes por ese motivo con la idea de comenzar Diseño Gráfico. Mis gustos fueron derivando hacia lo audiovisual e hice una FP II en Realización de Audiovisuales. Mientras estudiaba el ciclo, en mis ratos libres aprendí a hacer webs por hobby hasta que decidí dedicarme a ello";

const parrafo2 = "Hoy en día lo que me apasiona";

const Home = () => {
  return (
    <header className="header pc">
      <section className="home">
        <img
          className="img-portada"
          src="../src/img/bg.jpg"
          alt="Emilio Suárez - Frontend Developer"
        />
        <div className="grid container">
          <div className="spacer"></div>
          <div className="texto">
            <Title size="1" className="bebas">
              <br></br>
              <span className="color-secondary display">EMILIO SUÁREZ</span>
              <br></br>
              <span className="color-primary">Frontend developer</span>
            </Title>
            <Text className="code" color="var(--text-dark)">
              {parrafo1}.
            </Text>
            <Text className="code" color="var(--text-dark)">
              {parrafo2}.
            </Text>
            <Btn className="code secondary" url="https://google.es" color="red">
              Ver proyectos
            </Btn>
          </div>
        </div>

        <div className="bg">
          <BlurredBlob fill1="secondary-light" fill2="primary-light" />
        </div>
      </section>
    </header>
  );
};

export default Home;
