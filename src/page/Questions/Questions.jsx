import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import s from './Questions.module.sass'

export const Questions = () => {
  return (
    <>
      <Section className={s.questions}>
        <Container>
          <h2>ЧАВО</h2>
        </Container>
      </Section>
    </>
  )
}
