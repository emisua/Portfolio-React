import Title from '../Title'
import Header from '../Header'
import Figure from '../Figure'
import '../../src/css/Sobremi.css'
import Text from '../Text'
import Badge from '../Badge'

const SobreMi = ({ isMobile }) => {
  return (
    <>
      <section className='sobremi pb-24'>
        <Title
          size='3'
          title='<Sobre mí/>'
          className='bg-transparent md:text-secondary-darker md:bg-white text-secondary-darker dark:text-secondary-light dark:md:bg-secondary-darker md:rounded-2xl py-6 md:px-4 p-0 md:mt-8 md:mb-0 text-2xl lg:text-5xl text-center md:max-w-fit mx-auto relative z-10 drop-shadow-sm bg-white dark:bg-secondary-darker'
        />
        <header className='p-0 md:p-4 w-auto max-w-full md:max-w-screen-md lg:max-w-screen-lg md:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl container md:-mt-16 md:-mb-16 aspect-square md:aspect-[3/2] lg:aspect-[21/12]'>
          <img
            src='./assets/img/bg-sobremi.jpg'
            alt='En Babia...'
            title='En Babia...'
            className='w-full h-full md:rounded-2xl drop-shadow-2xl object-cover object-bottom origin-bottom'
          />
        </header>
        <main className='w-auto max-w-full md:max-w-screen-sm mx-4 -mt-8 p-6 md:p-0 md:mx-auto md:w-full container bg-white dark:bg-secondary-darker relative rounded-2xl 2xl:max-w-screen-xl lg:max-w-[70vw]'>
          <article className='grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-8 relative p-0 md:p-8 rounded-2xl grid-sobremi content bg-transparent font-fira-code'>
            <section className='mb-8 lg:mb-0'>
              <Text className='mb-6'>
                De pequeño me gustaba mucho dibujar y sacaba buenas notas en ello. Hice el Bachiller de artes por ese motivo con la idea de comenzar Diseño Gráfico. Mis gustos fueron derivando hacia lo audiovisual e hice una FP II en Realización de Audiovisuales. Mientras estudiaba el ciclo, en mis ratos libres aprendí a hacer webs por hobby hasta que decidí dedicarme a ello.
              </Text>
              <Text className='mb-6'>
                Soy un <strong>apasionado de la tecnología.</strong> Desde que descubrí el diseño y desarrollo web, no he parado de indagar en ello.
              </Text>
              <Text className='mb-6'>
                Actualmente estoy centrado en <strong>aprender, mejorar, y especializarme en <Badge className='bg-js italic'>JavaScript</Badge></strong>. Esto lo acompaño con la librería <strong><Badge className='bg-react italic'>React</Badge></strong>, con el que está hecho este portfolio.
              </Text>
              <Text className='mb-6'>
                En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>. Soy <strong>autodidacta</strong> y aprendo algo nuevo cada día.
              </Text>
            </section>
            <section>
              <div className='tecnologias'>
                <Title className='text-lg' size='3' title='-> Tecnologías que utilizo' />
                <ul className='grid-tecnologias'>
                  <li>
                    <Figure
                      src='./assets/img/logos/html.svg'
                      label='HTML'
                    />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/css.svg'
                    label='CSS'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/js.svg'
                    label='JS'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/react.svg'
                    label='React'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/bootstrap.svg'
                    label='Bootstrap'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/tailwind.svg'
                    label='Tailwind'
                      />
                  </li>
                </ul>
              </div>
              <div className='cms'>
                <Title className='text-lg' size='3' title='-> CMS y eCommerce que utilizo' />
                <ul className='grid-tecnologias'>
                  <li><Figure
                    src='./assets/img/logos/wordpress.svg'
                    label='Wordpress'
                    className='dark:invert'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/orchard.svg'
                    label='Orchard'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/ghost.png'
                    label='Ghost'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/prestashop.svg'
                    label='Prestashop'
                      />
                  </li>
                </ul>
              </div>
              <div className='ecommerce'>
                <Title className='text-lg' size='3' title='-> Tecnologías que aprenderé' />
                <ul className='grid-tecnologias'>
                  <li><Figure
                    src='./assets/img/logos/svelte.svg'
                    label='Svelte'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/vue.svg'
                    label='Vue'
                      />
                  </li>
                  <li><Figure
                    src='./assets/img/logos/typescript.svg'
                    label='Typescript'
                      />
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>
      </section>
    </>

  )
}

export default SobreMi
