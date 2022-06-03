// import '../src/css/Header.css'

const Header = ({ children, imgUrl, isMobile, className = '' }) => {
  return (
    <div
      className={`header relative bg-center bg-cover flex text-center mb-0 md:mb-[-8vh] px-0 py-[3vh] md:pt-[4vh] md:px-0 md:pb-[12vh] bg-blend-luminosity bg-darkest ${className}`}
      style={
        isMobile
          ? { background: 'transparent' }
          : { 'background-image': `url(${imgUrl})` }
      }
    >
      {children}
    </div>
  )
}

export default Header
