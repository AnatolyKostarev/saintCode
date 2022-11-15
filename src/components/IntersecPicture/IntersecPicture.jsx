import React from 'react'
import clsx from 'clsx'
import s from './IntersecPicture.module.sass'
import { Container } from '../../ui/Container'

export const IntersecPicture = ({ className, children }) => {
  return (
    <div className={clsx(s.IntersecPicture, className)}>
      { children }
    </div>
  )
}
