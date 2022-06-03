const Text = ({ children, className = '', color }) => {
  return (
    <p className={`mb-3 leading-6 ${className}`}>
      {children}
    </p>
  )
}

export default Text
