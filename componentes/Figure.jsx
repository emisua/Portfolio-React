import '../src/css/Figure.css'

const Figure = ({ className, children, src, label = '' }) => {
  return (
    <figure>
      <img src={src} className={className} />
      <figcaption className='text-center text-xs mx-auto my-4 opacity-60'>{label}</figcaption>
    </figure>
  )
}

export default Figure
