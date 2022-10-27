import React from 'react'
import clsx from 'clsx'
import s from './ResultsArticle.module.sass'

const ResultsArticle = ({
  className, icon, subtitle, text,
}) => {
  return (
    <article className={clsx(s.ResultsArticle, className)}>
      <img
        className={clsx(s.img)}
        width="40"
        height="40"
        src={icon}
        alt="icon"
      />
      <p className={clsx(s.subtitle)}>
        {subtitle}
      </p>
      <p className={clsx(s.text)}>
        {text}
      </p>
    </article>
  )
}

export default ResultsArticle
