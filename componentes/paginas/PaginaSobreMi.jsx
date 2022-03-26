import Title from '../Title'
import Header from '../Header'
import Figure from '../Figure'
import '../../src/css/Sobremi.css'
import Footer from '../Footer'
import Text from '../Text'
import images from '../../src/assests/images'

const SobreMi = ({ isMobile }) => {
  return (
    <main className='sobremi'>
      <Header
        className='overlay-light color-black code'
        imgUrl={images.bgSobreMi}
        isMobile={isMobile}
      >
        <div className='container'>
          <Title size='3' title='<Sobre mí/>' />
        </div>
      </Header>
      <section className='container pb4'>
        <div className='grid-sobremi content'>
          <div className='col'>
            <div className='code'>
              <div className='text'>
                <Text>
                  De pequeño me gustaba mucho dibujar y sacaba buenas notas en ello. Hice el Bachiller de artes por ese motivo con la idea de comenzar Diseño Gráfico. Mis gustos fueron derivando hacia lo audiovisual e hice una FP II en Realización de Audiovisuales. Mientras estudiaba el ciclo, en mis ratos libres aprendí a hacer webs por hobby hasta que decidí dedicarme a ello.
                </Text>
                <Text>
                  Soy un <strong>apasionado de la tecnología.</strong> Desde que descubrí el diseño y desarrollo web, no he parado de indagar en ello.
                </Text>
                <Text>
                  Actualmente estoy centrado en <strong>aprender, mejorar, y especializarme en <i className='featured bg-js'>JavaScript</i></strong>. Esto lo acompaño con el framework <strong><i className='featured bg-react'>React</i></strong>, con el que está hecho este portfolio.
                </Text>
                <Text>
                  En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>. Soy <strong>autodidacta</strong> y aprendo algo nuevo cada día.
                </Text>
              </div>

            </div>
          </div>
          <div className='col code'>
            <div className='tecnologias'>
              <Title size='3' title='-> Tecnologías que utilizo' />
              <ul className='grid-tecnologias'>
                <li>
                  <Figure
                    src={images.html}
                    label='HTML'
                  />
                </li>
                <li><Figure
                  src={images.css}
                  label='CSS'
                    />
                </li>
                <li><Figure
                  src={images.js}
                  label='JS'
                    />
                </li>
                <li><Figure
                  src={images.react}
                  label='React'
                    />
                </li>
                <li><Figure
                  src={images.bootstrap2}
                  label='Bootstrap'
                    />
                </li>
              </ul>
            </div>
            <div className='cms'>
              <Title size='3' title='-> CMS y eCommerce que utilizo' />
              <ul className='grid-tecnologias'>
                <li><Figure
                  src={images.wordpress}
                  label='Wordpress'
                    />
                </li>
                <li><Figure
                  src={images.orchard}
                  label='Orchard'
                    />
                </li>
                <li><Figure
                  src={images.ghost}
                  label='Ghost'
                    />
                </li>
                <li><Figure
                  src={images.prestashop}
                  label='Prestashop'
                    />
                </li>
              </ul>
            </div>
            <div className='ecommerce'>
              <Title size='3' title='-> Tecnologías que aprenderé' />
              <ul className='grid-tecnologias'>
                <li><Figure
                  src={images.svelte}
                  label='Svelte'
                    />
                </li>
                <li><Figure
                  src={images.vue}
                  label='Vue'
                    />
                </li>
                <li><Figure
                  src={images.tailwind}
                  label='Tailwind'
                    />
                </li>
                <li><Figure
                  src={images.typescript}
                  label='Typescript'
                    />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>

  )
}

export default SobreMi
