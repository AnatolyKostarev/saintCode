import React from 'react'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { SectionTitle } from '../../ui/SectionTitle'
import { MemberCard } from '../../ui/MemberCard'
import { MemberCardHeader } from '../../ui/MemberCard/MemberCardHeader'
import { MemberCardContent } from '../../ui/MemberCard/MemberCardContent'
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
              <MemberCardContent content={member.content} />
              <MemberCardContent
                className={s.team__education}
                title={member.title}
                content={member.education}
              />
            </MemberCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
