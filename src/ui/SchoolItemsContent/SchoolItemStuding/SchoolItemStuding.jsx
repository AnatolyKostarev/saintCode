import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './SchoolItemStuding.module.sass'

export const SchoolItemStuding = ({ show, className }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.school__content, { [s.school__content__active]: show }, className)}>
      <p>
        {t('SchoolItemStuding.header')}
      </p>
      <div>
        {t('SchoolItemStuding.listTitle')}
        <ul>
          <li>
            {t('SchoolItemStuding.item1')}
          </li>
          <li>
            {t('SchoolItemStuding.item2')}
          </li>
          <li>
            {t('SchoolItemStuding.item3')}
          </li>
          <li>
            {t('SchoolItemStuding.item4')}
          </li>
          <li>
            {t('SchoolItemStuding.item5')}
          </li>
          <li>
            {t('SchoolItemStuding.item6')}
          </li>
        </ul>
      </div>
    </div>
  )
}
