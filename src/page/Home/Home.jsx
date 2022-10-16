import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import s from './Home.module.sass'

export const Home = () => {
  return (
    <>
      <Section className={s.home}>
        <Container>
          <h2>Home</h2>
        </Container>
      </Section>
    </>
  )
}
