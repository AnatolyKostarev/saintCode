import React from 'react'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { SectionTitle } from '../../ui/SectionTitle'
import { MemberCard } from '../../ui/MemberCard'
import { MemberCardHeader } from '../../ui/MemberCard/MemberCardHeader'
import { teamData } from './teamData'
import s from './Team.module.sass'

export const Team = () => {
  return (
    <Section className={s.team}>
      <Container>
        <SectionTitle className={s.team__title}>
          Команда
        </SectionTitle>
        <div className={s.team__wrapper}>
          {teamData.map(member => (
            <MemberCard key={member.id}>
              <MemberCardHeader {...member} />
            </MemberCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
