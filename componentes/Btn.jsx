import { Link } from 'react-router-dom'

const Btn = ({ children, url, className = '', to }) => {
  return (
    <Link className={`font-fira-code dark:text-white bg-transparent transition-all duration-100 ease-in-out ${className}`} href={url} to={to}>
      {children}
    </Link>
  )
}

export default Btn
