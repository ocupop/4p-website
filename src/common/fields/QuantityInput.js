import React from 'react'
import Label from './label'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: false
}

const QuantityInput = ({
  className,
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  onChange,
  onAdd,
  onRemove,
  maskOptions,
  form: { errors, touched }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <div className={`form-group ${className}`}>
      {/* <button
        className="btn btn-link"
        onClick={event => {
          event.preventDefault()
          onAdd()
        }}>
        +plus+
      </button>
      <br />
      <button className="btn btn-link" onClick={onRemove}>
        -minus-
      </button> */}
      <Label label={label} hint={hint} />
      <MaskedInput
        mask={numberMask}
        className={`form-control ${status}`}
        {...field}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  )
}

export default QuantityInput
