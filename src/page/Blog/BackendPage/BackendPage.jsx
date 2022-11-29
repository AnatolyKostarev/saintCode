import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import s from './BackendPage.module.sass'

export const BackendPage = ({ className }) => {
  return (
    <Layout>
      <Section className={clsx(s.Backend, className)}>
        <Container>
          <SectionTitle>
            Backend
          </SectionTitle>
        </Container>
      </Section>
    </Layout>
  )
}
