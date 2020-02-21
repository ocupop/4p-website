/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import CreatableSelect from 'react-select/creatable'
import FieldHint from './FieldHint'
import { zipOptions } from '../data/ZIPS'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center'
}

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: 10
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#5fb35f' : 'white'
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

const CreateSelect = ({
  className,
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
  options,
  theme
}) => {
  return (
    <>
      <div className={`form-group ${className}`}>
        <label className="sr-only">
          <span className="mr-2">{label}</span>
          {hint && <FieldHint content={hint} />}
        </label>
        <CreatableSelect
          {...field}
          type={type}
          defaultValue={defaultValue}
          formatGroupLabel={formatGroupLabel}
          onChange={onChange}
          placeholder={placeholder}
          options={zipOptions}
          isSearchable={isSearchable}
          inMulti={isMulti}
          isClearable
          className="react-select-zip"
          classNamePrefix="react-select"
          styles={selectStyles}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#5fb35f',
              primary: '#5fb35f',
              primary50: '#a7a9ac'
            }
          })}
        />
      </div>
      <p className="mt-4">
        Already a Member?{' '}
        <button type="button" className="btn btn-transparent text-mid" disabled>
          <em>Sign in here</em>
        </button>
      </p>
    </>
  )
}

export default CreateSelect
