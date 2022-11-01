import React from 'react'
import clsx from 'clsx'
import s from './ForArticle.module.sass'

export const ForArticle = ({ className, svg, children }) => {
  return (
    <article>
      <div className={clsx(s.container, className)}>
        <img className={clsx(s.img)} src={svg} alt="Svg figure" width="60" height="60" />
      </div>
      {children}
    </article>
  )
}
