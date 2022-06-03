import Text from './Text'

const Footer = ({ className = '' }) => {
  return (
    <footer className={`footer flex justify-center items-center absolute bottom-0 left-0 right-0 p-4 flex-col ${className}`}>
      <Text className='flex justify-center items-center text-xs text-secondary-dark m-0 leading-4'>
        Emilio Suárez - 2022
      </Text>
      <Text className='flex justify-center items-center text-xs text-secondary-dark m-0 leading-4'>
        Mi gama de colores
        <span className='gama ml-2 flex justify-center items-center'>
          <span className='h-3 w-3 inline-flex rounded-2xl mr-1 bg-primary'> </span>
          <span className='h-3 w-3 inline-flex rounded-2xl mr-1 bg-secondary'> </span>
          <span className='h-3 w-3 inline-flex rounded-2xl mr-1 bg-js'> </span>
          <span className='h-3 w-3 inline-flex rounded-2xl mr-1 bg-react'> </span>
        </span>
      </Text>
    </footer>
  )
}

export default Footer
