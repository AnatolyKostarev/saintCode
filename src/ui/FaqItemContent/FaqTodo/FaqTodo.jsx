import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './FaqTodo.module.sass'

export const FaqTodo = ({ className, show }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.faq__content, { [s.faq__content__active]: show }, className)}>
      <ul>
        <li>
          {t('FaqTodo.keyOne')}
        </li>
        <li>
          {t('FaqTodo.keyTwo')}
        </li>
        <li>
          {t('FaqTodo.keyThree')}
        </li>
        <li>
          {t('FaqTodo.keyFour')}
        </li>
      </ul>
    </div>
  )
}
