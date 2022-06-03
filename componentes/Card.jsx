import React from 'react'
import Text from './Text'

const Card = ({ className, linkUrl, img, imgAlt, tags, title, desc }) => {
  return (
    <div className={`card ${className} group rounded-xl relative overflow-hidden top-0 w-full shadow-xl hover:rounded-none hover:-top-2 hover:shadow-2xl transition-all duration-300 ease-in-out`}>
      <a href={linkUrl} target='_blank' rel='noopener noreferrer' className='w-full'>
        <div className='z-10 before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b
        group-hover:before:z-20 before:z-20 before:transition-all before:duration-300 before:ease-in-out
        before:from-black/50 before:to-black/20 group-hover:before:bg-js group-hover:before:opacity-90 group-hover:before:bg-none before:opacity-100'
        >
          <img
            src={img} alt={imgAlt} className='object-cover max-w-full w-full h-full absolute z-10 transition-all duration-200 ease-in-out group-hover:scale-110'
          />
        </div>
        <div className='flex flex-col p-4 z-20 relative text-white min-h-full w-full justify-between overflow-hidden md:justify-start'>
          <div className='tags order-2'>
            {tags}
          </div>
          <h4 className='my-2 self-start font-bold group-hover:text-black text-2xl order-2'>{title}</h4>
          <Text className='hidden opacity-80 mt-auto font-fira-code md:flex md:mt-auto md:order-3 group-hover:text-black group-hover:opacity-100 text-sm'>{desc}</Text>
        </div>
      </a>
    </div>
  )
}

export default Card
