import React from 'react'
import clsx from 'clsx'
import LineSVG from './Subtract.svg'
import s from './HeroArticle.module.sass'

export const HeroArticle = ({ children }) => {
  return (
    <article className={clsx(s.HeroArticle)}>
      <div className={clsx(s.img__wrapper)}>
        <img src={LineSVG} alt="Line" width="96" height="12" />
      </div>
      {children}
    </article>
  )
}
