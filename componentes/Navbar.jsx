import '../src/css/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const [dropdown, setDropdown] = useState(false)
  // Si esta abierto se cierra o viceversa, como un toggle.
  const cambiarDropdown = () => setDropdown(!dropdown)

  return (
    <nav
      className={
        props.isMobile
          ? dropdown
              ? 'navbar dropdown open' // Es móvil con dropdown abierto
              : 'navbar dropdown closed' // Es móvil con dropdown cerrado
          : 'navbar container'
      }
    >
      <a className='logo-zone' href='/'>
        <img src='../src/img/logo.svg' alt='' className='logo' />
        <div className='texto code'>
          <span className='name'>Emilio Suárez</span>
          <span className='desc'>Frontend developer</span>
        </div>
      </a>
      <ul>
        <Link to='/sobre-mi'>
          <li>Sobre mí</li>
        </Link>
        <Link to='/proyectos'>
          <li>Proyectos</li>
        </Link>
        <Link to='/contacto'>
          <li>Contacta</li>
        </Link>
      </ul>
      <button onClick={cambiarDropdown} className='nav-button'>
        <img src={!dropdown ? '../src/img/menu.svg' : '../src/img/close.svg'} />
      </button>
    </nav>
  )
}

export default Navbar
