import Cards from '../Cards'
import Title from '../Title'
import '../../src/css/Proyectos.css'

const Proyectos = () => {
  return (
    <section className='proyectos bloque'>
      <div className='container'>
        <Title size='3' title='Proyectos' />
      </div>
      <div className='container'>
        <div className='card-block'>
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default Proyectos
