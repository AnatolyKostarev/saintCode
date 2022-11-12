import React from 'react'
import clsx from 'clsx'
import s from './Form.module.sass'

export const Form = ({
  children, className, onSubmit,
}) => {
  return (
    <form className={clsx(s.Form, className)} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
