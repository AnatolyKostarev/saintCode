import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './FaqRequirements.module.sass'

export const FaqRequirements = ({ className, show }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.faq__content, { [s.faq__content__active]: show }, className)}>
      <p>
        {t('FaqRequirements.keyOne')}
      </p>
      <p>
        {t('FaqRequirements.keyTwo')}
      </p>
    </div>
  )
}
