import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import s from './CommercialProject.module.sass'

export const CommercialProject = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.CommercialProject}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          <span className="transparent">
            {t('CommercialProject.title-span')}
&nbsp;
          </span>
          {t('CommercialProject.title')}
          <span className="transparent">
            {t('CommercialProject.subtitle')}
          </span>
        </SectionTitle>
        <div className={s.intersec}>
          <p className={s.intersec__text}>
            <span className={s.gray}>
              {t('CommercialProject.important-span')}
            </span>
            {t('CommercialProject.important1')}
            <br />
            {' '}
            {t('CommercialProject.important2')}
          </p>
        </div>
      </Container>
    </Section>
  )
}
