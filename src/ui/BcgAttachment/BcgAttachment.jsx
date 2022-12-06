import React from 'react'
import clsx from 'clsx'
import clock from './bcg-clock.jpg'
import s from './BcgAttachment.module.sass'

export const BcgAttachment = ({ className, children }) => {
  return (
    <div className={clsx(s.BcgAttachment, className)}>
      {children}
      <img src={clock} alt="" width="1160" />
    </div>
  )
}
