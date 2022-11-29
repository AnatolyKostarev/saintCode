import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './HR.module.sass'

export const HR = ({
  className,
}) => {
  return (
    <Layout>
      <Section className={clsx(s.HR, className)}>
        <Container>
          <SectionTitle>
            Human Resources
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
