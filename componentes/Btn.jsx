import '../src/css/Btn.css'
import '../src/index.css'
import { Link } from 'react-router-dom'

const Btn = ({ children, url, className = '', to }) => {
  return (
    <Link className={`btn no-underline hover:underline decoration-amber-400 decoration-2 underline-offset-2 hover:duration-1000 transition-all ${className}`} href={url} to={to}>
      {children}
    </Link>
  )
}

export default Btn
