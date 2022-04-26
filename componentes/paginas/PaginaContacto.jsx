import Title from '../Title'
import Header from '../Header'
// import Input from '../Input'
import '../../src/css/Contacto.css'
import Footer from '../Footer'
// import images from '../../src/assests/images'

const Contacto = ({ isMobile }) => {
  // const inputNombre = {
  //   type: 'text',
  //   label: 'Nombre',
  //   placeHolder: 'Nombre',
  //   name: 'nombre'
  // }
  // const inputMensaje = {
  //   type: 'text',
  //   label: 'Mensaje',
  //   placeHolder: 'Escribe tu mensaje',
  //   name: 'mensaje'
  // }
  // const inputEmail = {
  //   type: 'email',
  //   label: 'Email',
  //   placeHolder: 'email@email.com',
  //   name: 'email'
  // }

  return (
    <section className='contacto'>
      <Header
        className='overlay-dark color-black code'
        imgUrl='./assets/img/bg-contacto.jpg'
        isMobile={isMobile}
      >
        <div className='container'>
          <Title size='3' title='<Contacto/>' />
        </div>
      </Header>
      {/* <div className='container'>
        <div className='content code'>
          <form className='form'>
            <div className='nombre'>
              <Input
                {...inputNombre}
              />

            </div>
            <div className='email'>
              <Input
                {...inputEmail}
              />
            </div>
            <div className='mensaje'>
              <label htmlFor='textarea'>Mensaje</label>
              <textarea name='textarea' id='' cols='30' rows='5' placeholder='Escribe tu mensaje' />
            </div>
            <button className='enviar'>
              Enviar
            </button>
          </form>
        </div>
      </div> */}
      <main className='container pb4'>
        <div className='content code'>
          <h2 className='color-secondary'>Envíame un email</h2>
          <h4><a className='bebas color-primary' href='mailto:hola@emisua.dev'>hola@emisua.dev</a></h4>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default Contacto
