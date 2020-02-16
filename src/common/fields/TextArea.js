import React from "react";
import { Icon, Popup } from "semantic-ui-react";

const TextArea = ({
  label,
  hint,
  rows,
  placeholder,
  type,
  field,
  form: { errors, touched }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``;
  return (
    <div className="form-group">
      <label className={label ? "" : "sr-only"}>
        <span className="mr-2">{label}</span>
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
      <textarea
        className={`form-control ${status}`}
        {...field}
        placeholder={placeholder}
        rows={rows}
        type={type}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="invalid-feedback">{errors[field.name]}</span>
      )}
    </div>
  );
};

export default TextArea;
