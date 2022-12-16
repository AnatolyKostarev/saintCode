import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { Slider } from '../Slider'
import s from './StudentStory.module.sass'

export const StudentStory = () => {
  const { t } = useTranslation()
  return (
    <Section className={clsx(s.StudentStory)}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          {t('StudentStory')}
        </SectionTitle>
      </Container>
      <Slider />
    </Section>
  )
}
