import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { ScheduleCard } from '../../ui/ScheduleCard'
import { dailyCard } from './dailyCard'
import s from './DailySchedule.module.sass'

export const DailySchedule = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.schedule}>
      <Container>
        <SectionTitle className={s.schedule__title}>
          <span>
            {t('DailySchedule.title')}
          </span>
          &nbsp;
          {t('DailySchedule.subtitle')}
        </SectionTitle>
        <div className={s.schedule__cards}>
          {dailyCard.map(({ ...elem }) => (
            <ScheduleCard {...elem} key={elem.id} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
