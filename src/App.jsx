import '../src/css/Colores.css'
import '../src/css/App.css'
import Navbar from '../componentes/Navbar'
import Home from '../componentes/paginas/PaginaHome'
import Proyectos from '../componentes/paginas/PaginaProyectos'
import SobreMi from '../componentes/paginas/PaginaSobreMi'
import Contacto from '../componentes/paginas/PaginaContacto'
import { useState, useEffect, useCallback } from 'react'

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
  return (
    <main
      className={
        // Si es mobile le añade su clase y si no, no
        isMobile ? 'portfolio' : 'portfolio desktop'
      }
    >
      <Navbar isMobile={isMobile} />
      <Home />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </main>
  )
}

export default App
