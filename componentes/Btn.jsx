import '../src/css/Btn.css'
import { Link } from 'react-router-dom'

const Btn = ({ children, url, size, className, to }) => {
  return (
    <Link className={`btn ${className}`} href={url} to={to}>
      {children}
    </Link>
  )
}

export default Btn
