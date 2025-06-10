import { useState } from "react"

interface PasswordInputProps {
  id: string
  hasLabel?: boolean
  label?: string
  placeholder?: string
  register: any
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

function PasswordInput({
  id,
  hasLabel = true,
  label = "",
  placeholder = "",
  register,
  error,
  required = false,
  disabled = false,
  className,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={`form-input-container ${className}`}>
      {hasLabel && <label className="form-input-label" htmlFor={id}>{label}{required && <span className="text-support-red"> *</span>}</label>}
      <div className="form-input flex flex-row justify-between items-center">
        <input
          id={id}
          type={showPassword ? "text" : "password"} 
          placeholder={placeholder}
          className="w-full outline-none"
          {...register}
          disabled={disabled}
        />
        <button type="button" className="focus:outline-none" onClick={toggleShowPassword}>
        { showPassword ? 
          <i className="bi bi-eye icon-regular"/> :
          <i className="bi bi-eye-slash icon-regular"/>
        }
        </button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export default PasswordInput