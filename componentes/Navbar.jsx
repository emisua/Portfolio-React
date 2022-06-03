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
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true)
    }
  }, [])

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
              ? 'navbar dropdown open flex justify-between h-16 items-center py-2 px-1 relative z-50' // Es móvil con dropdown abierto
              : 'navbar dropdown closed flex justify-between h-16 items-center py-2 px-1 relative z-50' // Es móvil con dropdown cerrado
          : 'flex justify-between h-16 items-center p-4 relative z-50 container'
      }
    >
      <Link className='flex items-center group flex-grow' to='/'>
        <svg
          className='logo md:mr-4 mr-1 h-10 '
          width='99'
          height='50'
          viewBox='0 0 99 50'
          fill={darkMode ? 'white' : 'black'}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M18.1682 0.362566V5.1118C17.0793 5.1118 16.1244 5.21231 15.3036 5.41334C14.4827 5.61436 13.8545 5.96616 13.419 6.46872C13.0002 6.97128 12.8326 7.68325 12.9164 8.60462L13.7959 17.0226C13.9802 18.7313 13.8126 20.1301 13.2933 21.219C12.7908 22.2911 12.0034 23.1203 10.9313 23.7067C9.85914 24.2762 8.57761 24.6783 7.08667 24.9128C8.66137 25.1641 9.97641 25.5745 11.0318 26.1441C12.1039 26.6969 12.8745 27.5094 13.3436 28.5815C13.8294 29.6369 13.9802 31.0441 13.7959 32.8031L12.9164 41.221C12.8326 42.1256 13.0002 42.8292 13.419 43.3318C13.8545 43.8511 14.4827 44.2113 15.3036 44.4123C16.1412 44.6133 17.0961 44.7138 18.1682 44.7138V49.4631C16.1747 49.4631 14.4325 49.3123 12.9415 49.0108C11.4506 48.7092 10.2193 48.215 9.24769 47.5282C8.27607 46.8581 7.58085 45.9619 7.16205 44.8395C6.76 43.7171 6.64273 42.335 6.81026 40.6933L7.63949 32.6774C7.7735 31.4378 7.59761 30.4494 7.11179 29.7123C6.62598 28.9585 5.83026 28.4224 4.72462 28.1041C3.63573 27.7691 2.22855 27.6015 0.503077 27.6015V22.2241C2.21179 22.2241 3.61897 22.065 4.72462 21.7467C5.83026 21.4116 6.62598 20.8756 7.11179 20.1385C7.59761 19.3846 7.7735 18.3962 7.63949 17.1733L6.81026 9.15744C6.62598 7.49898 6.73487 6.10855 7.13692 4.98616C7.55573 3.86376 8.25094 2.96752 9.22256 2.29744C10.1942 1.6106 11.4255 1.11641 12.9164 0.814872C14.4241 0.513335 16.1747 0.362566 18.1682 0.362566ZM33.3634 12.3236V21.8472H45.6762V26.8477H33.3634V36.9492H48.3147V42H26.4783V7.24769H48.1388L47.4352 12.3236H33.3634ZM75.4458 32.0241C75.4458 34.1349 74.9013 35.9944 73.8125 37.6026C72.7403 39.2108 71.1907 40.4756 69.1637 41.3969C67.1367 42.3015 64.6825 42.7538 61.8012 42.7538C58.7858 42.7538 56.1976 42.3099 54.0366 41.4221C51.8755 40.5174 50.0663 39.3615 48.6089 37.9544L52.2273 33.9087C53.4837 35.0311 54.8909 35.9106 56.4489 36.5472C58.0068 37.1838 59.7574 37.5021 61.7007 37.5021C62.9403 37.5021 64.0543 37.3094 65.0427 36.9241C66.0478 36.5388 66.8352 35.9776 67.4048 35.2405C67.9911 34.4867 68.2842 33.5653 68.2842 32.4764C68.2842 31.5215 68.0832 30.7174 67.6812 30.0641C67.2791 29.4108 66.5839 28.8244 65.5955 28.3051C64.6239 27.7858 63.267 27.2665 61.5248 26.7472C58.9617 25.9598 56.8509 25.0971 55.1925 24.159C53.534 23.2041 52.3027 22.0817 51.4986 20.7918C50.6945 19.4851 50.2925 17.9439 50.2925 16.1682C50.2925 14.1747 50.8453 12.4576 51.9509 11.0169C53.0566 9.55949 54.5475 8.44547 56.4237 7.67487C58.3167 6.88752 60.4275 6.49385 62.756 6.49385C65.3359 6.49385 67.6058 6.87077 69.5658 7.62462C71.5258 8.36171 73.2513 9.41709 74.7422 10.7908L71.2996 14.6856C70.1102 13.6638 68.8203 12.9099 67.4299 12.4241C66.0562 11.9383 64.6574 11.6954 63.2335 11.6954C62.1111 11.6954 61.106 11.8462 60.2181 12.1477C59.347 12.4492 58.6601 12.8932 58.1576 13.4795C57.655 14.0658 57.4037 14.8113 57.4037 15.7159C57.4037 16.5368 57.6299 17.2403 58.0822 17.8267C58.5513 18.3962 59.347 18.9323 60.4694 19.4349C61.5918 19.9207 63.133 20.4735 65.093 21.0933C67.1535 21.7132 68.9543 22.4586 70.4955 23.3297C72.0535 24.2009 73.268 25.3316 74.1391 26.7221C75.0102 28.0957 75.4458 29.8631 75.4458 32.0241ZM80.6651 0.362566C82.6586 0.362566 84.4008 0.513335 85.8918 0.814872C87.3827 1.11641 88.614 1.6106 89.5856 2.29744C90.5572 2.96752 91.2524 3.86376 91.6712 4.98616C92.09 6.10855 92.2073 7.4906 92.023 9.13231L91.1938 17.1733C91.0598 18.3962 91.2524 19.3846 91.7718 20.1385C92.2911 20.8756 93.0952 21.4116 94.1841 21.7467C95.2897 22.065 96.6718 22.2241 98.3302 22.2241V27.6015C96.6885 27.6015 95.3148 27.7691 94.2092 28.1041C93.1036 28.4224 92.2911 28.9585 91.7718 29.7123C91.2524 30.4494 91.0598 31.4378 91.1938 32.6774L92.023 40.6682C92.2073 42.3267 92.09 43.7171 91.6712 44.8395C91.2692 45.9619 90.5824 46.8581 89.6107 47.5282C88.6391 48.215 87.3995 48.7092 85.8918 49.0108C84.4008 49.3123 82.6586 49.4631 80.6651 49.4631V44.7138C81.754 44.7138 82.7089 44.6133 83.5297 44.4123C84.3506 44.2113 84.9704 43.8511 85.3892 43.3318C85.8247 42.8292 86.0006 42.1256 85.9169 41.221L85.0374 32.8031C84.8531 31.0441 85.0123 29.6369 85.5148 28.5815C86.0342 27.5094 86.8466 26.6885 87.9523 26.119C89.0579 25.5494 90.3981 25.1557 91.9728 24.9379C90.3478 24.6867 88.9825 24.2762 87.8769 23.7067C86.7712 23.1203 85.9755 22.2911 85.4897 21.219C85.0039 20.1468 84.8531 18.748 85.0374 17.0226L85.9169 8.60462C86.0006 7.68325 85.8247 6.97128 85.3892 6.46872C84.9704 5.96616 84.3506 5.61436 83.5297 5.41334C82.7089 5.21231 81.754 5.1118 80.6651 5.1118V0.362566Z' fill='' />
        </svg>
        <div className='flex flex-col font-fira-code dark:text-secondary-light'>
          <span className='text-xl font-extrabold group-hover:text-primary transition-all duration-200 ease-in-out leading-5 whitespace-nowrap'>Emilio Suárez</span>
          <span className='text-xs font-light'>Frontend developer</span>
        </div>
      </Link>
      <a
        className='w-4 mr-8 md:hidden'
        onClick={() => {
          setDarkMode(!darkMode)
          document.querySelector('html').classList.toggle('dark')
        }}
      >
        <svg
          className='md:inline-flex md:ml-4 hover:fill-secondary-light transition-all duration-200 fill-transparent'
          width='24'
          height='24'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          {darkMode // SOL
            ? <><path d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M22 12L23 12' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M12 2V1' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M12 23V22' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M20 20L19 19' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M20 4L19 5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M4 20L5 19' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M4 4L5 5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1 12L2 12' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              </>
            : <path // LUNA
                d='M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z'
                stroke='black'
                strokeLinecap='round'
                strokeLinejoin='round'
              />}
        </svg>
      </a>
      {/* {Avatar responsive}
      <Link to='/'>
        <img
          src='./assets/img/avatar.png'
          className={
            isMobile
              ? 'max-h-12'
              : 'hidden max-h-12'
          }
        />
      </Link> */}
      <ul
        className='m-0 list-none flex gap-4 min-h-0 w-auto ml-auto items-center z-50 rounded-2xl flex-col justify-center bg-primary-light/80 p-6 fixed bottom-36 top-auto opacity-100 right-16 backdrop-blur backdrop-saturate-150 pb-2 shadow-xl md:flex-row md:justify-between md:relative md:top-0 md:shadow-none md:backdrop-filter-none md:bg-transparent md:right-0 md:p-0 transition-all ease-in-out'
        ref={ref}
      >
        {
          // Convierte el objeto "menuItems" en un array para hacer el map. Le pasa la Key y el Value de la key por props. La Key es menuLabel y el value es menuLabelUrl.
          Object.entries(menuItems).map(([menuLabel, menuLabelUrl], i) => {
            return (

              <li
                className='font-fira-code'
                onClick={() => cambiarDropdown()}
                key={i}
              >
                <Btn
                  className='no-underline hover:underline hover:decoration-secondary-dark decoration-2 decoration-transparent underline-offset-2 duration-500 transition-all ease-in-out lg:ml-4 dark:text-darkest md:dark:text-secondary-light'
                  to={menuLabelUrl}
                >{menuLabel}
                </Btn>

              </li>
            )
          })
        }
        <a
          className='cursor-pointer'
          onClick={() => {
            setDarkMode(!darkMode)
            document.querySelector('html').classList.toggle('dark')
          }}
        >
          <svg
            className='w-4 hidden md:inline-flex md:ml-4 hover:fill-secondary-light transition-all duration-200 fill-transparent'
            width='24'
            height='24'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {darkMode // SOL
              ? <><path d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M22 12L23 12' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M12 2V1' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M12 23V22' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M20 20L19 19' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M20 4L19 5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M4 20L5 19' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M4 4L5 5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M1 12L2 12' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
              </>
              : <path // LUNA
                  d='M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z'
                  stroke='black'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />}
          </svg>
        </a>
      </ul>
      {/* Al hacer click, cambiará el estado de mobile a desktop */}
      <button
        onClick={cambiarDropdown}
        className={
          dropdown
            ? 'border-none bg-primary-light-80 m-0 cursor-pointer fixed right-16 bottom-16 flex p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out active md:invisible md:pointer-events-none'
            : 'border-none bg-secondary-light-80 m-0 cursor-pointer fixed right-16 bottom-16 flex p-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out md:invisible md:pointer-events-none'
        }
      >
        <img
          className='h-9'
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
