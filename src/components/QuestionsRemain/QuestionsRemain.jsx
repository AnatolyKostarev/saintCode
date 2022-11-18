import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'

import s from './QuestionsReman.module.sass'
import { MessangerForm } from '../../widgets/MessangerForm/MessangerForm'

export const QuestionsRemain = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.QuestionsRemain}>
      <Container>
        <SectionTitle className={s.QuestionsRemain__title}>
          {t('QuestionsRemain.title')}
        </SectionTitle>
        <p className={s.QuestionsRemain__subtitle}>
          {t('QuestionsRemain.subtitle')}
        </p>
        <MessangerForm />
        <p className={s.QuestionsRemain__conditions}>
          {t('QuestionsRemain.conditions.text')}
          { ' ' }
          <span>
            <Link to="*">
              {t('QuestionsRemain.conditions.link')}
            </Link>
          </span>
        </p>
      </Container>
    </Section>
  )
}
