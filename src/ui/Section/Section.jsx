import React from 'react'
import clsx from 'clsx'
import s from './Section.module.sass'

export const Section = ({ children, className }) => {
  return <section className={clsx(s.Section, className)}>{children}</section>
}
