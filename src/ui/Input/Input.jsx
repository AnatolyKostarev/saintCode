import React from 'react'
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
