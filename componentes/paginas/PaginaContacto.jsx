import Title from '../Title'
// import '../../src/css/Contacto.css'

const Contacto = ({ isMobile }) => {
  return (
    <section className='contacto'>
      <Title
        size='3'
        title='<Contacto/>'
        className='bg-transparent md:text-darkest md:bg-white text-darkest dark:text-secondary-light dark:md:bg-darkest md:rounded-2xl py-6 md:px-4 p-0 md:mt-8 md:mb-0 text-2xl lg:text-5xl text-center md:max-w-fit mx-auto relative z-10 drop-shadow-sm bg-white dark:bg-darkest'
      />
      <header className='p-0 md:p-4 w-auto max-w-full md:max-w-screen-md lg:max-w-screen-lg md:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl container md:-mt-16 md:-mb-16 aspect-square md:aspect-[3/2] lg:aspect-[3/1]'>
        <img
          src='./assets/img/bg-contacto.jpg'
          alt='Tracemos un puente...'
          title='Tracemos un puente...'
          className='w-full h-full md:rounded-2xl drop-shadow-2xl object-cover object-center origin-bottom dark:grayscale'
        />
      </header>
      <main className='w-auto max-w-full md:max-w-screen-sm mx-4 -mt-8 p-6 md:p-0 md:mx-auto md:w-full container bg-white dark:bg-darkest relative rounded-2xl 2xl:max-w-screen-xl lg:max-w-[70vw] drop-shadow-2xl'>
        <article className='flex justify-center items-center flex-col relative p-0 md:p-8 rounded-2xl grid-sobremi content bg-transparent font-fira-code text-secondary-darker dark:text-secondary'>
          <h2 className='text-secondary-darker dark:text-secondary text-2xl mb-8'>Envíame un email</h2>
          <h4><a className='font-bebas text-primary text-5xl md:text-6xl lg:text-8xl xl:text-9xl' href='mailto:hola@emisua.dev'>hola@emisua.dev</a></h4>
        </article>
      </main>
    </section>
  )
}

export default Contacto
