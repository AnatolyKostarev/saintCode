import React from 'react'
import clsx from 'clsx'
import s from './SectionTitle.module.sass'

export const SectionTitle = ({ children, className }) => {
  return <h2 className={clsx(s.SectionTitle, className)}>{children}</h2>
}
