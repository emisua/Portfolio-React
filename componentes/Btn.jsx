import '../src/css/Btn.css'

const Btn = ({ children, url, size, className }) => {
  return (
    <a className={`btn ${className}`} href={url}>
      {children}
    </a>
  )
}

export default Btn
