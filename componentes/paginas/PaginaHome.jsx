import '../../src/css/Home.css'
import Btn from '../Btn'
import Text from '../Text'
import Title from '../Title'

const Home = () => {
  return (
    <section className='home'>
      <img
        className='img-portada'
        src='../src/img/bg.jpg'
        alt='Emilio Suárez - Frontend Developer'
      />
      <div className='grid container'>
        <div className='spacer' />
        <div className='texto'>
          <Title size='1' className='bebas'>
            <span className='color-secondary-darker display'>EMILIO SUÁREZ</span>
            <br />
            <span className='color-primary'>Frontend developer</span>
          </Title>
          <div className='text code'>
            <Text>
              Soy un <strong>apasionado de la tecnología.</strong> Desde que descubrí el diseño y desarrollo web, no he parado de indagar en ello.
            </Text>
            <Text>
              Actualmente estoy centrado en <strong>aprender, mejorar, y especializarme en <i className='featured bg-js'>JavaScript</i></strong>. Esto lo acompaño con el framework <strong><i className=' featured bg-react'>React</i></strong>, con el que está hecho este portfolio.
            </Text>
            <Text>
              En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>. Soy autodidacta y aprendo algo nuevo cada día.
            </Text>
          </div>
          <Btn className='code secondary' to='/proyectos' color='red'>
            Ver proyectos
          </Btn>
        </div>
      </div>
    </section>
  )
}

export default Home
