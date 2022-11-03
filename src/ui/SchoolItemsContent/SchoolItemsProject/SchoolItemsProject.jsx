import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './SchoolItemsProject.module.sass'

export const SchoolItemsProject = ({ show }) => {
  const { t } = useTranslation()
  return (
    <div className={show ? s.school__content : s.school__content__active}>
      <p>
        {t('Проект1')}
      </p>
      <p>
        {t('Проект2')}
      </p>
      <p>
        {t('Проект3')}
      </p>
      <p>
        {t('Проект4')}
      </p>
    </div>
  )
}
