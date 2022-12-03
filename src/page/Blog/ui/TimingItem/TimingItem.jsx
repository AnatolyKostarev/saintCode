import React from 'react'
import clsx from 'clsx'
import s from './TimingItem.module.sass'

export const TimingItem = ({
  className, time, text, onClick,
}) => {
  return (
    <div className={clsx(s.timingItem, className)}>
      <button type="button" onClick={onClick}>
        {time}
      </button>
      <span>
        {text}
      </span>
    </div>
  )
}
