import React from 'react'
import clsx from 'clsx'
import s from './Container.module.sass'

export const Container = ({ children, className }) => {
  return (
    <div className={clsx(s.Container, className)}>
      {children}
    </div>
  )
}
