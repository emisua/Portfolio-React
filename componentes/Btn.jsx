import { Link } from 'react-router-dom'

const Btn = ({ children, url, className = '', to }) => {
  return (
    <Link className={`${className}`} href={url} to={to}>
      {children}
    </Link>
  )
}

export default Btn
