import React from 'react'
import clsx from 'clsx'
import s from './Address.module.sass'

export const Address = ({ className, city, address }) => {
  return (
    <address className={clsx(s.Address, className)}>
      <span className={clsx(s.mark)}>
        {city}
      </span>
      ,
      {' '}
      {address}
    </address>
  )
}
