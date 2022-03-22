import Title from '../Title'
import Header from '../Header'
import Figure from '../Figure'
import '../../src/css/Sobremi.css'
import Footer from '../Footer'
import Text from '../Text'
import bootstrap from '../../src/img/logos/bootstrap.svg'
import css from '../../src/img/logos/css.svg'
import html from '../../src/img/logos/html.svg'
import js from '../../src/img/logos/js.svg'
import orchard from '../../src/img/logos/orchard.svg'
import prestashop from '../../src/img/logos/prestashop.svg'
import react from '../../src/img/logos/react.svg'
import svelte from '../../src/img/logos/svelte.svg'
import tailwind from '../../src/img/logos/tailwind.svg'
import typescript from '../../src/img/logos/typescript.svg'
import vue from '../../src/img/logos/vue.svg'
import wordpress from '../../src/img/logos/wordpress.svg'
import ghost from '../../src/img/logos/ghost.png'
import bgSobreMi from '../../src/img/bg-sobremi.jpg'

const SobreMi = ({ isMobile }) => {
  return (
    <main className='sobremi'>
      <Header
        className='overlay-light color-black code'
        imgUrl={bgSobreMi}
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
                    src={html}
                    label='HTML'
                  />
                </li>
                <li><Figure
                  src={css}
                  label='CSS'
                    />
                </li>
                <li><Figure
                  src={js}
                  label='JS'
                    />
                </li>
                <li><Figure
                  src={react}
                  label='React'
                    />
                </li>
                <li><Figure
                  src={bootstrap}
                  label='Bootstrap'
                    />
                </li>
              </ul>
            </div>
            <div className='cms'>
              <Title size='3' title='-> CMS y eCommerce que utilizo' />
              <ul className='grid-tecnologias'>
                <li><Figure
                  src={wordpress}
                  label='Wordpress'
                    />
                </li>
                <li><Figure
                  src={orchard}
                  label='Orchard'
                    />
                </li>
                <li><Figure
                  src={ghost}
                  label='Ghost'
                    />
                </li>
                <li><Figure
                  src={prestashop}
                  label='Prestashop'
                    />
                </li>
              </ul>
            </div>
            <div className='ecommerce'>
              <Title size='3' title='-> Tecnologías que aprenderé' />
              <ul className='grid-tecnologias'>
                <li><Figure
                  src={svelte}
                  label='Svelte'
                    />
                </li>
                <li><Figure
                  src={vue}
                  label='Vue'
                    />
                </li>
                <li><Figure
                  src={tailwind}
                  label='Tailwind'
                    />
                </li>
                <li><Figure
                  src={typescript}
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
