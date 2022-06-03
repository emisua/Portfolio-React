// import '../src/css/Colores.css'
// import '../src/css/App.css'
import Navbar from '../componentes/Navbar'
import Home from '../componentes/paginas/PaginaHome'
import Proyectos from '../componentes/paginas/PaginaProyectos'
import SobreMi from '../componentes/paginas/PaginaSobreMi'
import Contacto from '../componentes/paginas/PaginaContacto'
import Footer from '../componentes/Footer'
import { useState, useEffect, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

function App () {
  // Comprobar dispositivo
  const [width, setWidth] = useState(window.innerWidth)
  const comprobarAnchoVentana = useCallback((event) => {
    setWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    // Cada vez que la ventana cambia de tamaño, le aplica el nuevo ancho a width.
    window.addEventListener('resize', comprobarAnchoVentana)
    return () => {
      window.removeEventListener('resize', comprobarAnchoVentana)
    }
  }, [])

  // Establecer ancho para pantallas mobile
  const isMobile = width <= 767

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  // Renderizamos la web

  return (

    <main
      className={
        // Si es mobile le añade su clase y si no, no
        isMobile
          ? 'portfolio'
          : 'portfolio desktop'
      }
    >
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path='/' element={<Home isMobile={isMobile} />} />
        <Route path='/sobre-mi' element={<SobreMi isMobile={isMobile} />} />
        <Route path='/proyectos' element={<Proyectos isMobile={isMobile} />} />
        <Route path='/contacto' element={<Contacto isMobile={isMobile} />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
