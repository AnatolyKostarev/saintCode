import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './FaqToPay.module.sass'

export const FaqToPay = ({ className, show }) => {
  const { t } = useTranslation()
  return (
    <div
      className={clsx(
        s.faq__content,
        { [s.faq__content__active]: show },
        className,
      )}
    >
      <p>
        {t('FaqToPay.keyOne')}
      </p>
      <p>
        {t('FaqToPay.keyTwo')}
      </p>
    </div>
  )
}
