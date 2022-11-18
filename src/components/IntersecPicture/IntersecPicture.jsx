import React from 'react'
import clsx from 'clsx'
import s from './IntersecPicture.module.sass'

export const IntersecPicture = ({ className, children }) => {
  return (
    <div className={clsx(s.IntersecPicture, className)}>
      { children }
    </div>
  )
}
