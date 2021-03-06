const Title = ({ children, title, size, className = '' }) => {
  const Tag = `h${size}`
  if (title !== undefined) {
    return <Tag className={`font-bold ${className}`}>{title}</Tag>
  } else {
    return <Tag className={`title ${className}`}>{children}</Tag>
  }
}

export default Title
