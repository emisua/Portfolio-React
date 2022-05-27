import '../src/css/Figure.css'

const Figure = ({ className, children, src, label = '' }) => {
  return (
    <figure>
      <img src={src} className={className} />
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export default Figure
