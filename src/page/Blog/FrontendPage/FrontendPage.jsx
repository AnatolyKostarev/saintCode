import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './FrontendPage.module.sass'

export const FrontendPage = ({ className }) => {
  return (
    <Layout>
      <Section className={clsx(s.Frontend, className)}>
        <Container>
          <SectionTitle>
            Frontend
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
