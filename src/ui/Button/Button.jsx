import React from 'react'
import clsx from 'clsx'
import s from './Button.module.sass'

export const Button = ({
  text,
  className,
  onClick,
  type,
  style = {},
  disabled = false,
}) => {
  return (
    <button
      className={clsx(s.Button, className)}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
