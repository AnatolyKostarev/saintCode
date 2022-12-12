import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { MessangerForm } from '../../widgets/MessangerForm'
import s from './QuestionsReman.module.sass'

export const QuestionsRemain = ({ title, subtitle, className }) => {
  const { t } = useTranslation()
  return (
    <Section className={clsx(s.QuestionsRemain, className)}>
      <Container className={s.container}>
        <SectionTitle className={s.QuestionsRemain__title}>
          {title}
        </SectionTitle>
        <p className={s.QuestionsRemain__subtitle}>
          {subtitle}
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
