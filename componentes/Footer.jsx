import '../src/css/Footer.css'
import Text from './Text'

const Footer = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <Text>
        Emilio Suárez 2022
      </Text>
      <Text>
        Mi gama de colores
        <span className='gama'>
          <span className='circle bg-primary'> </span>
          <span className='circle bg-secondary'> </span>
          <span className='circle bg-js'> </span>
          <span className='circle bg-react'> </span>
        </span>
      </Text>
    </footer>
  )
}

export default Footer
