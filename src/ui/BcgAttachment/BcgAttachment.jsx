import React from 'react'
import clsx from 'clsx'
import s from './BcgAttachment.module.sass'

export const BcgAttachment = ({ className, children }) => {
  return (
    <div className={clsx(s.BcgAttachment, className)}>
      {children}
    </div>
  )
}
