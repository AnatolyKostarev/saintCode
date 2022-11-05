import React from 'react'
import clsx from 'clsx'
import s from './Title.module.sass'

export const Title = ({ children, className }) => {
  return (
    <h1 className={clsx(s.Title, className)}>
      {children}
    </h1>
  )
}
