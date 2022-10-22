import React from 'react'
import clsx from 'clsx'
import s from './Panel.module.sass'

export const Panel = ({ text, description, className }) => {
  return (
    <div className={clsx(s.panel, className)}>
      <p>
        {text}
      </p>
      <p>
        {description}
      </p>
    </div>
  )
}
