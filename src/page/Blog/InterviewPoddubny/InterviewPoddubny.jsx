import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './InterviewPoddubny.module.sass'

export const InterviewPoddubny = ({
  className,
}) => {
  return (
    <Layout>
      <Section className={clsx(s.InterviewPoddubny, className)}>
        <Container>
          <SectionTitle>
            InterviewPoddubny
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
