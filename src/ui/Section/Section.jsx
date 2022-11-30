import React from 'react'
import clsx from 'clsx'
import s from './Section.module.sass'

export const Section = ({ children, className, style }) => {
  return (
    <section style={style} className={clsx(s.Section, className)}>
      {children}
    </section>
  )
}
