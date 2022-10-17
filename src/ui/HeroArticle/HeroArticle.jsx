import React from 'react'
import clsx from 'clsx'
import s from './HeroArticle.module.sass'
import LineSVG from './Subtract.svg'

const HeroArticle = ({ children }) => {
  return (
    <article className={clsx(s.HeroArticle)}>
      <div className={clsx(s.img__wrapper)}>
        <img src={LineSVG} alt="Line" width="96" height="12" />
      </div>
      {children}
    </article>
  )
}

export default HeroArticle
