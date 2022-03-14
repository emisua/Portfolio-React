import Title from '../Title'
import Header from '../Header'
import '../../src/css/Sobremi.css'

const SobreMi = () => {
  return (
    <section className='sobremi'>
      <Header
        className='overlay-dark color-black code'
        imgUrl='https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
      >
        <div className='container'>
          <Title size='3' title='<Sobre mí/>' />
        </div>
      </Header>
      <div className='container'>
        <div className='content code'>
          <div className='text'>
            <p>
              Soy un <strong>apasionado de la tecnología.</strong> Desde que descubrí el diseño y desarrollo web, no he parado de indagar en ello.
            </p>
            <p>Actualmente estoy centrado en <strong className='featured'>aprender, mejorar, y especializarme en <i>JavaScript</i></strong>. Esto lo acompaño con el framework <strong><i className='color-react'>React⚛️</i></strong>, con el que está hecho este portfolio.</p> En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>.
            <p />
          </div>
          <div className='tecnologias'>
            <Title size='3' title='Tecnologías que utilizo' />
            <ul className='grid-tecnologias'>
              <li><img src='../../src/img/logos/html.jpg' />
                <span>HTML</span>
              </li>
              <li><img src='../../src/img/logos/css.jpg' />
                <span>CSS</span>
              </li>
              <li><img src='../../src/img/logos/js.jpg' />
                <span>Javascript</span>
              </li>
              <li><img src='../../src/img/logos/react.jpg' />
                <span>React JS</span>
              </li>
            </ul>
          </div>
          <div className='cms'>
            <Title size='3' title='CMSs que utilizo' />
            <ul className='grid-tecnologias'>
              <li><img src='../../src/img/logos/wordpress.jpg' />
                <span>Wordpress</span>
              </li>
              <li><img src='../../src/img/logos/orchard.jpg' />
                <span>Orchard</span>
              </li>
              <li><img src='../../src/img/logos/ghost.jpg' />
                <span>Ghost</span>
              </li>
            </ul>
          </div>
          <div className='ecommerce'>
            <Title size='3' title='eCommerce que utilizo' />
            <ul className='grid-tecnologias'>
              <li><img src='../../src/img/logos/prestashop.jpg' />
                <span>Prestashop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
