import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { Header } from '../../components/Header/Header'

import s from './Questions.module.sass'

export const Questions = () => {
  return (
    <>
      <Header />
      <Section className={s.questions}>
        <Container>
          <h2>
            ЧАВО
          </h2>
        </Container>
      </Section>
    </>
  )
}
