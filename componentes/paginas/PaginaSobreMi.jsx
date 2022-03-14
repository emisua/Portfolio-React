import Title from '../Title'
import Header from '../Header'
import Figure from '../Figure'
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
            <p>Actualmente estoy centrado en <strong className='featured'>aprender, mejorar, y especializarme en <i>JavaScript</i></strong>. Esto lo acompaño con el framework <strong><img width='12' src='../../src/img/logos/react.jpg' /><i className='color-react'>React</i></strong>, con el que está hecho este portfolio.</p> En un futuro me gustaría aprender otros frameworks como <i>Vue</i> o <i>Angular</i>. Soy autodidacta y aprendo algo nuevo cada día.
            <p />
          </div>
          <div className='tecnologias'>
            <Title size='3' title='Tecnologías que utilizo' />
            <ul className='grid-tecnologias'>
              <li>
                <Figure
                  src='../../src/img/logos/html.jpg'
                  label='HTML'
                />
              </li>
              <li><Figure
                src='../../src/img/logos/css.jpg'
                label='CSS'
                  />
              </li>
              <li><Figure
                src='../../src/img/logos/js.jpg'
                label='JS'
                  />
              </li>
              <li><Figure
                src='../../src/img/logos/react.jpg'
                label='React'
                  />
              </li>
            </ul>
          </div>
          <div className='cms'>
            <Title size='3' title='CMSs que utilizo' />
            <ul className='grid-tecnologias'>
              <li><Figure
                src='../../src/img/logos/wordpress.jpg'
                label='Wordpress'
                  />
              </li>
              <li><Figure
                src='../../src/img/logos/orchard.jpg'
                label='Orchard'
                  />
              </li>
              <li><Figure
                src='../../src/img/logos/ghost.jpg'
                label='Ghost'
                  />
              </li>
            </ul>
          </div>
          <div className='ecommerce'>
            <Title size='3' title='eCommerce que utilizo' />
            <ul className='grid-tecnologias'>
              <li><Figure
                src='../../src/img/logos/prestashop.jpg'
                label='Prestashop'
                  />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi
