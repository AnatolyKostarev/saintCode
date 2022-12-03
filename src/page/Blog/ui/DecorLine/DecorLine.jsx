import React from 'react'
import clsx from 'clsx'
import s from './DecorLine.module.sass'

export const DecorLine = ({ className, decorIcon }) => {
  return (
    <div className={clsx(s.DecorLine, className)}>
      <img
        src={decorIcon}
        alt="line"
      />
    </div>
  )
}
