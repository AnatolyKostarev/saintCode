import React from 'react'
import clsx from 'clsx'
import s from './BusinessHours.module.sass'

const BusinessHours = ({ className, from, to }) => {
  return (
    <p className={clsx(s.BusinessHours, className)}>
      Время работы с
      {' '}
      {from}
      {' '}
      до
      {' '}
      {to}
    </p>
  )
}

export default BusinessHours
