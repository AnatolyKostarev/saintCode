import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './Time.module.sass'

export const Time = ({ className }) => {
  return (
    <Layout>
      <Section className={clsx(s.Time, className)}>
        <Container>
          <SectionTitle className={s.Time__title}>
            Беспощадное время
          </SectionTitle>
          <p className={s.Time__subtitle}>
            или пара слов о работе с датой и временем в программировании
          </p>
          <div className={s.Time__bcg} />
        </Container>
      </Section>
      <Section className={s.Time__description}>
        <Container>
          2 ctrwbz
        </Container>
      </Section>
    </Layout>
  )
}
