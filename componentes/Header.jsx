import '../src/css/Header.css'

const Header = ({ children, imgUrl, isMobile, className = '' }) => {
  return (
    <div
      className={`header ${className}`}
      style={
        isMobile
          ? { background: 'var(--white)' }
          : { background: `url(${imgUrl})` }
      }
    >
      {children}
    </div>
  )
}

export default Header
