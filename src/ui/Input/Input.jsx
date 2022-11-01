import React from 'react'
import PropType from 'prop-types'
import clsx from 'clsx'
import s from './Input.module.sass'

export const Input = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className,
}) => {
  return (
    <>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx(s.Input, className)}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  )
}

Input.propTypes = {
  id: PropType.number.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
  value: PropType.number,
}
Input.defaultProps = {
  value: '',
}
