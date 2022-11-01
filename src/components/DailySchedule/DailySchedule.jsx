import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { ScheduleCard } from '../../ui/ScheduleCard'
import { dailyCard } from './dailyCard'
import s from './DailySchedule.module.sass'

export const DailySchedule = () => {
  return (
    <Section className={s.Schedule}>
      <Container>
        <SectionTitle>
          <span>
            Расписание
          </span>
          &nbsp;дня
        </SectionTitle>
        <div className={s.Schedule__cards}>
          {dailyCard.map(({ ...elem }) => (
            <ScheduleCard {...elem} key={elem.id} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
