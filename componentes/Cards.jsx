import proyectos from '../src/proyectos.json'
import { useEffect, useState } from 'react'
import '../src/css/Card.css'

const Cards = () => {
  const categorias = {
    // nombre: estado que va a cambiar al filtrar
    kadence: 'Kadence',
    wordpress: 'Wordpress',
    all: 'Kadence' && 'Wordpress'
  }
  const [categoriaActiva, setCategoriaActiva] = useState(categorias.all)

  useEffect(() => {
    setCategoriaActiva(categorias.all)
  }, [])

  const filtrar = proyectos.filter((proyecto) =>
    proyecto.tags.includes(categoriaActiva)
  )

  return filtrar.map((proyecto, index) => (
    <div className='card' key={index}>
      <a href={proyecto.url} target='_blank' rel='noopener noreferrer'>
        <div className='img'>
          <img src={proyecto.img.poster} alt='' />
        </div>
        <div className='content'>
          <div className='tags'>
            {proyecto.tags.map((tag, index) => (
              <span key={index} className={`tag ${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
          <h4 className='title'>{proyecto.nombre}</h4>
          <div className='desc code'>{proyecto.desc[0]}</div>
        </div>
      </a>
    </div>
  ))
}

export default Cards
