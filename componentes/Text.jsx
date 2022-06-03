const Text = ({ children, className = '', color }) => {
  return (
    <p className={`leading-5 ${className}`}>
      {children}
    </p>
  )
}

export default Text
