import React from "react";
import { Checkbox } from "semantic-ui-react";

const SwitchInput = props => {
  const { label, field, type, onChange } = props;
  return (
    <>
      <Checkbox
        {...field}
        type={type}
        checked={field.value}
        label={label}
        onChange={onChange}
        value=""
      />
    </>  
  );
};

export default SwitchInput;
