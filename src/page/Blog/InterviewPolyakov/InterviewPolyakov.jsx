import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './IntreviewPolyakov.module.sass'

export const InterviewPolyakov = ({
  className,
}) => {
  return (
    <Layout>
      <Section className={clsx(s.IntreviewPolyakov, className)}>
        <Container>
          <SectionTitle>
            IntreviewPolyakov
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
