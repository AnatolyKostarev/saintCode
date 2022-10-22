import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { Header } from '../../components/Header/Header'
import s from './School.module.sass'

export const School = () => {
  return (
    <>
      <Header />
      <Section className={s.school}>
        <Container>
          <h2>
            О Школе
          </h2>
        </Container>
      </Section>
    </>
  )
}
