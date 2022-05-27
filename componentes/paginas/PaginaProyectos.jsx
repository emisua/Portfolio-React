import Cards from '../Cards'
import Title from '../Title'
import '../../src/css/Proyectos.css'
import Header from '../Header'
import Footer from '../Footer'
// import images from '../../src/assests/images'

const Proyectos = ({ isMobile }) => {
  return (
    <>
      <main className='proyectos pb-24'>
        <Header
          className='overlay-dark color-black code'
          imgUrl='./assets/img/bg-proyectos.jpg'
          isMobile={isMobile}
        >
          <div className='container'>
            <Title size='3' title='<Proyectos/>' className='bg-transparent md:text-secondary-darker md:bg-white text-secondary-darker dark:text-secondary-light dark:md:bg-darkest inline-flex rounded-2xl md:py-8 md:px-4 p-0 mt-8 mx-0 mb-12 md:mb-8 text-4xl lg:text-5xl' />
          </div>
        </Header>
        <section className='w-container md:w-full container bg-white dark:bg-secondary-darker rounded-2xl py-4 relative'>
          <div className='card-block bg-white dark:bg-secondary-darker'>
            <Cards />
          </div>
        </section>
      </main>
    </>
  )
}

export default Proyectos
