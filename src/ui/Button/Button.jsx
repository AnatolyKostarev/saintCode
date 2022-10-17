import React from 'react'
import clsx from 'clsx'
import s from './Button.module.sass'

const Button = ({ text, className, toggleLang }) => {
  return (
    <button onClick={toggleLang} type="button" className={clsx(s.Button, className)}>{text}</button>
  )
}

export default Button

// toggleLang - test translation for dev
