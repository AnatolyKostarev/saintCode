import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './ResultsArticle.module.sass'

export const ResultsArticle = ({
  className, icon, subtitle, text,
}) => {
  const { t } = useTranslation()
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
        {t(`ResultsArticle.subtitle.${subtitle}`)}
      </p>
      <p className={clsx(s.text)}>
        {t(`ResultsArticle.text.${text}`)}
      </p>
    </article>
  )
}
