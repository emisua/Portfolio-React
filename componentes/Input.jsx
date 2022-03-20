import '../src/css/Input.css'

const Input = ({ label, type, children, name, placeHolder, className = '' }) => {
  return (
    <>
      <label>{label}</label>
      <input className={`input ${className}`} type={type} name={name} placeholder={placeHolder} />
    </>
  )
}

export default Input
