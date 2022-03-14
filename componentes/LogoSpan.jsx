import '../src/css/Logospan.css'

const LogoSpan = ({ className, children, src, label = '' }) => {
  return (
    <figure>
      <img src={src} />
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export default LogoSpan
