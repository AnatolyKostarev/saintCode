import React from 'react'
import clsx from 'clsx'
import s from './Button.module.sass'

const Button = ({
  text, className, onClick, style = {},
}) => {
  return (
    <button
      className={clsx(s.Button, className)}
      type="button"
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  )
}

export default Button
