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
          <SectionTitle>
            Time
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
