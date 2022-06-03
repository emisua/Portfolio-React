import Title from '../Title'
import proyectos from '../../src/proyectos.json'
import Card from '../Card'

const Proyectos = ({ isMobile }) => {
  return (
    <main className='proyectos pb-24'>
      <Title
        size='3'
        title='<Proyectos/>'
        className='bg-transparent md:text-darkest md:bg-white text-darkest dark:text-secondary-light dark:md:bg-darkest md:rounded-2xl py-6 md:px-4 p-0 md:mt-8 md:mb-0 text-2xl lg:text-5xl text-center md:max-w-fit mx-auto relative z-10 drop-shadow-sm bg-white dark:bg-darkest'
      />
      <header className='p-0 md:p-4 w-auto max-w-full md:max-w-screen-md lg:max-w-screen-lg md:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl container md:-mt-16 md:-mb-16 aspect-square md:aspect-[3/2] lg:aspect-[3/1] dark:grayscale dark:invert'>
        <img
          src='./assets/img/bg-proyectos.jpg'
          alt='En Babia...'
          title='En Babia...'
          className='w-full h-full md:rounded-2xl drop-shadow-2xl object-cover object-center origin-bottom'
        />
      </header>
      <section className='w-auto max-w-full md:max-w-screen-sm mx-4 -mt-8 p-6 md:p-0 md:mx-auto md:w-full container bg-white dark:bg-darkest relative rounded-2xl 2xl:max-w-screen-xl lg:max-w-[70vw] drop-shadow-2xl'>
        <div className='card-block grid gap-6 grid-cols-projects lg:gap-8 relative p-0 md:p-8 rounded-2xl grid-sobremi content bg-transparent'>
          {proyectos.reverse().map((proyecto, index) => (
            <Card
              className='aspect-square lg:aspect-[5/6] rounded-xl overflow-hidden'
              key={index}
              linkUrl={proyecto.url}
              img={proyecto.img.poster}
              imgAlt={proyecto.title}
              tags={proyecto.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`tag rounded-md text-[.6rem] border-white/50 group-hover:text-black border-[1px] py-[.15rem] px-[.3rem] backdrop-blur-[3px] bg-transparent group-hover:border-black mr-1 inline-flex ${tag.toLowerCase()}`}
                >
                  {tag}
                </span>
              ))}
              title={proyecto.nombre}
              desc={proyecto.desc[0]}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Proyectos
