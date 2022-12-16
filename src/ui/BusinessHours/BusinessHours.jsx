import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './BusinessHours.module.sass'

export const BusinessHours = ({ className, from, to }) => {
  const { t } = useTranslation()

  return (
    <p className={clsx(s.BusinessHours, className)}>
      {t('BusinessHours.from')}
      {' '}
      <time>
        {from}
      </time>
      {' '}
      {t('BusinessHours.to')}
      {' '}
      <time>
        {to}
      </time>
    </p>
  )
}
