const Text = ({ children, className = '', color }) => {
  return (
    <p className={`leading-6 ${className}`}>
      {children}
    </p>
  )
}

export default Text
