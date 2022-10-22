import React from 'react'
import clsx from 'clsx'
import s from './Place.module.sass'

const Place = ({ className, text }) => {
  return (
    <p className={clsx(s.Place, className)}>
      {text}
    </p>
  )
}

export default Place
