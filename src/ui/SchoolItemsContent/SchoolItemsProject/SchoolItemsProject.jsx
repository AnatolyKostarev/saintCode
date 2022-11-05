import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './SchoolItemsProject.module.sass'

export const SchoolItemsProject = ({ show, className }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.school__content, { [s.school__content__active]: show }, className)}>
      <p>
        {t('SchoolItemsProject.item1')}
      </p>
      <p>
        {t('SchoolItemsProject.item1')}
      </p>
      <p>
        {t('SchoolItemsProject.item1')}
      </p>
      <p>
        {t('SchoolItemsProject.item1')}
      </p>
    </div>
  )
}
