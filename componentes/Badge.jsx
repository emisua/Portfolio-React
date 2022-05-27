import React from 'react'

const Badge = ({ children, className }) => {
  return (
    <span className={`px-1 py-[.05rem] rounded-md dark:text-darkest ${className}`}>{children}</span>
  )
}

export default Badge
