import React from 'react'
import Label from './label'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '',
  // suffix: '',
  includeThousandsSeparator: false,
  // thousandsSeparatorSymbol: ',',
  allowDecimal: false,
  // decimalSymbol: '.',
  // decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  // requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: false
}

const QuantityInput = ({
  className,
  hint,
  label,
  placeholder,
  required,
  field,
  onChange,
  onAdd,
  onRemove,
  maskOptions,
  form: { errors, touched, setFieldValue }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  return (
    <div className={`form-group qty-input ${className}`}>
      <Label label={label} hint={hint} />
      <div className="input-group">
        <button onClick={() => setFieldValue(field.name, field.value - 1)} className="btn btn-mid">
          <i className="ri-subtract-line" />
        </button>
        <MaskedInput
          mask={numberMask}
          className={`form-control mt-0 ${status}`}
          {...field}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />

        <button onClick={() => setFieldValue(field.name, field.value + 1)} className="btn btn-mid">
          <i className="ri-add-line" />
        </button>
      </div>
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

      {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  )
}

export default QuantityInput
