import React from 'react'
import clsx from 'clsx'
import s from './FaqRequirements.module.sass'

export const FaqRequirements = ({ className, show }) => {
  return (
    <div className={clsx(s.faq__content, { [s.faq__content__active]: show }, className)}>
      <p>
        Подойдёт любой ноутбук, если он быстрый. Если тормозит, лучше поставь Linux Ubuntu 20.04 LTS.
      </p>
      <p>
        Предпочтительно иметь операционную систему Linux или MacOS, чтобы привыкнуть работать с командной строкой.
      </p>
    </div>
  )
}
