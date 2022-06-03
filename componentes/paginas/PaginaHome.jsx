import Btn from '../Btn'
import Text from '../Text'
import Title from '../Title'
import Badge from '../Badge'
// import images from '../../src/assests/images'

const Home = () => {
  return (
    <section className='home flex flex-col min-h-home justify-center md:mt-0 overflow-hidden mt-12 md:flex-row md:max-h-full'>
      <img
        className='md:absolute md:max-h-[calc(100vh - 1rem)] md:left-0 md:bottom-0 md:z-0 md:max-w-[60vw] md:h-full md:order-1 object-left-bottom w-full relative order-2 z-[1] object-contain mt-auto'
        src='./assets/img/bg-home-png.png'
        alt='Emilio Suárez - Frontend Developer'
      />
      <div className='grid container mx-auto my-0 px-4 py-0 w-full justify-center content-center md:grid-cols-2 md:max-w-6xl'>
        <div className='spacer' />
        <div className='texto flex order-1 flex-col items-start md:bg-transparent md:p-4 md:rounded-2xl md:backdrop-blur-sm'>
          <Title size='1' className='font-bebas relative mb-4 hidden md:block'>
            <span className='dark:text-white text-secondary-darker text-homeh1 leading-homeh1 font-normal'>EMILIO SUÁREZ</span>
            <br />
            <span className='text-primary text-homeh2 leading-homeh2 font-normal'>Frontend developer</span>
          </Title>
          <div className='text font-fira-code dark:text-secondary-light '>
            <Text>
              Soy un <strong>apasionado de la tecnología.</strong> Desde que descubrí el diseño y desarrollo web, no he parado de indagar en ello.
            </Text>
            <Text>
              Actualmente estoy centrado en <strong>aprender, mejorar, y especializarme en <Badge className='bg-js italic'>JavaScript</Badge></strong>. Esto lo acompaño con la librería <strong><Badge className='bg-react italic'>React</Badge></strong>, con el que está hecho este portfolio.
            </Text>
            <Text>
              En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>. Soy autodidacta y aprendo algo nuevo cada día.
            </Text>
          </div>
          <Btn className='px-3 py-2 border border-secondary-darker hover:bg-primary-light hover:border-primary-light dark:hover:text-darkest dark:border-secondary-light  dark:hover:border-primary-light rounded-md text-sm' to='/proyectos' color='red'>
            Ver proyectos
          </Btn>
        </div>
      </div>
    </section>
  )
}

export default Home
