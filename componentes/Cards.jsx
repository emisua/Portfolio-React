import proyectos from '../src/proyectos.json'
import { useEffect, useState } from 'react'
import '../src/css/Card.css'
// import images from '../src/assests/images'

const Cards = () => {
  // const obj = { ...proyectos, ...images }
  // console.log(obj)
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
  // console.log(images)

  return filtrar.map((proyecto, index) => (
    <div className='card' key={index}>
      <a href={proyecto.url} target='_blank' rel='noopener noreferrer'>
        <div className='img'>
          <img src='./assets/img/avatar.png' alt={proyecto.title} />
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
