import React from 'react'
import clsx from 'clsx'
import s from './Email.module.sass'

export const Email = ({ className }) => {
  return (
    <div className={clsx(s.Email, className)}>
      <a href="mailto:enter@saintcode.ru">
        enter@saintcode.ru
      </a>
    </div>
  )
}
