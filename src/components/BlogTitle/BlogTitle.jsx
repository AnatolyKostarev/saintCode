import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../../ui/SectionTitle'
import s from './BlogTitle.module.sass'

export const BlogTitle = () => {
  const { t } = useTranslation()

  return (
    <div className={s.blogHeader}>
      <SectionTitle className={s.blogHeader__title}>
        {t('BlogHeader.title')}
      </SectionTitle>
      <p>
        {t('BlogHeader.description')}
      </p>
    </div>
  )
}
