import React from 'react'
import clsx from 'clsx'
import s from './Place.module.sass'

export const Place = ({ className, text }) => {
  return (
    <p className={clsx(s.Place, className)}>
      {text}
    </p>
  )
}
