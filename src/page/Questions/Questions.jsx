import { Layout } from '../../layout'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'

import s from './Questions.module.sass'

export const Questions = () => {
  return (
    <Layout>
      <Section className={s.questions}>
        <Container>
          <h2>
            ЧАВО
          </h2>
        </Container>
      </Section>
    </Layout>
  )
}
