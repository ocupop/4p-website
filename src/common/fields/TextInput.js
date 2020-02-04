import React from "react";
import { Icon, Popup } from "semantic-ui-react";

const TextInput = ({
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  form: { errors, touched }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``;
  return (
    <div className="form-group">
      <label className={label ? "" : "sr-only"}>
        <span className="mr-2">{label}</span>
        {/*  @TODO not showing up in browsers, might be a CSS issue */}
        {hint && (
          <Popup
            trigger={<Icon name="question circle" color="black" />}
            content={hint}
            position="right center"
            inverted
            size="tiny"
          />
        )}
      </label>
      <input
        className={`form-control ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="invalid-feedback">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default TextInput;
