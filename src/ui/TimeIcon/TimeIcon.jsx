import React from 'react'
import clsx from 'clsx'
import s from './TimeIcon.module.sass'

export const TimeIcon = ({ time }) => {
  return (
    <div className={clsx(s.TimeIcon)}>
      {time}
    </div>
  )
}
