import React from 'react'
import clsx from 'clsx'
import s from './BcgAttachment.module.sass'

export const BcgAttachment = ({ className }) => {
  return <div className={clsx(s.BcgAttachment, className)} />
}
