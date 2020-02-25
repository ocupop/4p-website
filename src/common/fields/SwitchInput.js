/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import Hint from './hint'

const SwitchInput = ({
  className,
  hint,
  type,
  label,
  field,
  onChange,
  toggle
  // checked,
  // form
}) => {
  // console.log(field)
  return (
    <div className={`form-group ${className}`}>
      <Checkbox {...field} type={type} checked={field.checked} label={label} onChange={onChange} toggle={toggle} />
      {hint && <Hint content={hint} />}
    </div>
  )
}

export default SwitchInput
