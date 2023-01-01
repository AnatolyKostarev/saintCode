import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Title } from '../Title'
import { Button } from '../Button'
import s from './NotFoundArticle.module.sass'

export const NotFoundArticle = ({ className }) => {
  const { t } = useTranslation()
  return (
    <article className={clsx(s.NotFoundArticle, className)}>
      <Title>
        <span className="transparent">
          {t('NotFoundArticle.item1')}
        </span>
        {' '}
        {t('NotFoundArticle.item2')}
      </Title>
      <span className={clsx(s.Error, 'transparent')}>
        {t('NotFoundArticle.error')}
      </span>
      <Link to="/">
        <Button className={s.btn} text={t('NotFoundArticle.buttonText')} />
      </Link>
    </article>
  )
}
