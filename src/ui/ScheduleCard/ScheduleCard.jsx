import React from 'react'
import clsx from 'clsx'
import { TimeIcon } from '../TimeIcon/TimeIcon'
import s from './ScheduleCard.module.sass'

export const ScheduleCard = ({ text, time }) => {
  return (
    <div className={clsx(s.schedule__card)}>
      <TimeIcon time={time} />
      <p>
        {text}
      </p>
    </div>
  )
}
