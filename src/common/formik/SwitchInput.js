import React from "react";
import { Checkbox } from "semantic-ui-react";

const SwitchInput = props => {
  const { label, field, type, onChange } = props;
  return (
    <div className="form-group">
      <Checkbox
        {...field}
        type={type}
        checked={field.value}
        label={label}
        onChange={onChange}
        value=""
      />
    </div>
  );
};

export default SwitchInput;
