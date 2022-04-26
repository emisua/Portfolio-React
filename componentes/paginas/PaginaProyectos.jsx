import Cards from '../Cards'
import Title from '../Title'
import '../../src/css/Proyectos.css'
import Header from '../Header'
import Footer from '../Footer'
// import images from '../../src/assests/images'

const Proyectos = ({ isMobile }) => {
  return (
    <>
      <main className='proyectos pb4'>
        <Header
          className='overlay-dark color-black code'
          imgUrl='./assets/img/bg-proyectos.jpg'
          isMobile={isMobile}
        >
          <div className='container'>
            <Title size='3' title='<Proyectos/>' />
          </div>
        </Header>
        <section className='container mb3'>
          <div className='card-block'>
            <Cards />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Proyectos
