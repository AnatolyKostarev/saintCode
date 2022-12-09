import React from 'react'
import clsx from 'clsx'
import s from './StudentStory.module.sass'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { Slider } from '../Slider'

export const StudentStory = () => {
  return (
    <Section className={clsx(s.StudentStory)}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          Истории студентов
        </SectionTitle>
      </Container>
      <Slider />
    </Section>
  )
}
