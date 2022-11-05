import React from 'react'
import clsx from 'clsx'
import s from './MemberCard.module.sass'

export const MemberCard = ({ children, className }) => {
  return (
    <div className={clsx(s.member, className)}>
      {children}
    </div>
  )
}
