import React from "react";
import { Radio } from 'semantic-ui-react'

const RadioInput = props => {
  const { label, field, type, onChange, onChecked } = props;
  return (
    <>
      <Radio
        {...field}
        type={type}
        // checked={field.value}
        label={label}
        // checked={onChecked}
        onChange={onChange}
        value={field.value}
      />
    </>  
  );
};

export default RadioInput;
