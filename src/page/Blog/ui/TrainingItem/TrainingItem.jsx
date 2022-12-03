import React from 'react'
import clsx from 'clsx'
import s from './TrainingItem.module.sass'

export const TrainingItem = ({ className, show, children }) => {
  return (
    <div
      className={clsx(
        s.trainingItem__content,
        { [s.trainingItem__content__active]: show },
        className,
      )}
    >
      {children}
    </div>
  )
}
