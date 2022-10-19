import React from 'react'
import clsx from 'clsx'
import s from './SectionTitle.module.sass'

export const SectionTitle = ({ children }) => {
  return <h2 className={clsx(s.SectionTitle)}>{children}</h2>
}
