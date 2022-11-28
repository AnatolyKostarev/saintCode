import React from 'react'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../../ui/SectionTitle'
import s from './BlogTitle.module.sass'

export const BlogTitle = () => {
  const { t } = useTranslation()
  
  return (
    <div className={s.blogHeader}>
      <SectionTitle className={s.blogHeader__title}>
        Узнай нас лучше
      </SectionTitle>
      <p>
        Истории наших выпускников, записи тренингов, статьи и интервью от SaintCode Bootcamp
      </p>
    </div>
  )
}
