import '../src/css/Navbar.css'
import { useState, useRef, useEffect } from 'react'
import Btn from './Btn'
import { Link } from 'react-router-dom'
// import images from '../src/assests/images'

const Navbar = ({ isMobile }) => {
  const [dropdown, setDropdown] = useState(false)
  // Si esta abierto se cierra o viceversa, como un toggle.
  const cambiarDropdown = () => setDropdown(!dropdown)
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        cambiarDropdown()
      }
    }
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
    // Cleanup the event listener
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [dropdown])

  // Objeto con todos los enlaces del menú
  const menuItems = {
    'Sobre mí': '/sobre-mi',
    Proyectos: '/proyectos',
    Contacto: '/contacto'
  }

  return (
    <nav
      className={
        isMobile
          ? dropdown
              ? 'navbar dropdown open' // Es móvil con dropdown abierto
              : 'navbar dropdown closed' // Es móvil con dropdown cerrado
          : 'navbar container'
      }
    >
      <Link className='logo-zone' to='/'>
        <img src='./assets/img/logo.svg' alt='' className='logo' />
        <div className='texto code'>
          <span className='name'>Emilio Suárez</span>
          <span className='desc'>Frontend developer</span>
        </div>
      </Link>
      <Link to='/'><img src='./assets/img/avatar.png' className='avatar' /></Link>
      <ul ref={ref}>
        {
          // Convierte el objeto "menuItems" en un array para hacer el map. Le pasa la Key y el Value de la key por props. La Key es menuLabel y el value es menuLabelUrl.
          Object.entries(menuItems).map(([menuLabel, menuLabelUrl], i) => {
            return (
              <Btn
                className=''
                to={menuLabelUrl}
                key={i}
              >
                <li
                  className={
                  isMobile
                    ? 'code'
                    : 'code'
                }
                  onClick={() => cambiarDropdown()}
                >{menuLabel}
                </li>
              </Btn>
            )
          })
        }
      </ul>
      {/* Al hacer click, cambiará el estado de mobile a desktop */}
      <button
        onClick={cambiarDropdown}
        className={
          dropdown
            ? 'nav-button active'
            : 'nav-button'
        }
      >
        <img
          src={
            dropdown
              ? './assets/img/close.svg'
              : './assets/img/menu.svg'
          }
        />
      </button>
    </nav>
  )
}

export default Navbar
