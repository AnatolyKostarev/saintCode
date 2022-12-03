import React from 'react'
import clsx from 'clsx'
import s from './AuthorSaid.module.sass'

export const AuthorSaid = ({ className, children }) => {
  return (
    <div className={clsx(s.author__preface, className)}>
      {children}
    </div>
  )
}
