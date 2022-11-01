import React from 'react'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { SectionTitle } from '../../ui/SectionTitle'
import s from './Team.module.sass'

export const Team = () => {
  return (
    
    <Section className={s.team}>
      <Container>
        <SectionTitle className={s.team__title}>
          Команда
        </SectionTitle>
      </Container>
    </Section>
  )
}
