import Title from '../Title'
import Header from '../Header'
import '../../src/css/Contacto.css'

const Contacto = ({ isMobile }) => {
  return (
    <section className='contacto'>
      <Header
        className='overlay-dark color-black code'
        imgUrl='./assets/img/bg-contacto.jpg'
        isMobile={isMobile}
      >
        <div className='container'>
          <Title size='3' title='<Contacto/>' className='bg-transparent md:text-secondary-darker md:bg-white text-secondary-darker dark:text-secondary-light dark:md:bg-darkest inline-flex rounded-2xl md:py-8 md:px-4 p-0 mt-8 mx-0 mb-12 md:mb-8 text-4xl lg:text-5xl' />
        </div>
      </Header>
      <main className='w-container md:w-full container bg-white dark:bg-secondary-darker rounded-2xl py-8 relative'>
        <div className='content font-fira-code'>
          <h2 className='text-secondary text-2xl'>Envíame un email</h2>
          <h4><a className='font-bebas text-primary' href='mailto:hola@emisua.dev'>hola@emisua.dev</a></h4>
        </div>
      </main>
    </section>
  )
}

export default Contacto
