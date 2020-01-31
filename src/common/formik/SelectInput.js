import React from "react";
import Select from "react-select";
import { Icon, Popup } from "semantic-ui-react";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const SelectInput = ({
  form,
  field,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  type,
  onChange,
  options
}) => {
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
      <Select
        {...field}
        type={type}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#EBECF0",
            primary: "#172B4D"
          }
        })}
      />
    </div>
  );
};

export default SelectInput;
