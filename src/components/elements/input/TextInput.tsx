interface TextInputProps {
  id: string
  hasLabel?: boolean
  label?: string
  placeholder?: string
  type?: "text" | "number" | "email" | "password"
  register: any
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
  hasTooltip?: boolean
  tooltip?: string
}

function TextInput({
  id,
  hasLabel = true,
  label = "",
  placeholder = "",
  type = "text",
  register,
  error,
  required = false,
  disabled = false,
  className,
  // hasTooltip = false,
  // tooltip
}: TextInputProps) {
  return (
    <div className={`form-input-container ${className}`}>
      {hasLabel &&
        <div className="flex flex-row items-center gap-2">
          <label className="form-input-label" htmlFor={id}>
            {label}
            {required && <span className="text-support-red"> *</span>}
          </label>
          {/* {hasTooltip && tooltip &&
            <Tooltip content={tooltip}>
              <i className="bi bi-question-circle icon-small"/>
            </Tooltip>
          } */}
        </div>
      }
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="form-input"
        {...register}
        onWheel={(event) => (event.target as HTMLInputElement).blur()} // To prevent users from scrolling to numbers
        disabled={disabled}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export default TextInput