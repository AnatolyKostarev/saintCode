import React from 'react'
import clsx from 'clsx'
import clock from './bcg-clock.jpg'
import s from './BcgAttachment.module.sass'

export const BcgAttachment = ({ className, children }) => {
  return (
    <div className={clsx(s.BcgAttachment, className)}>
      {children}
      <img
        className={s.BcgAttachment__bcg}
        src={clock}
        alt=""
        width="1160"
        height="482"
      />
    </div>
  )
}
