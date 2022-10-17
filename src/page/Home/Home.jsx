import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import s from './Home.module.sass'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Section className={s.hero}>
          <Container>
            <Hero />
          </Container>
        </Section>
      </main>
    </>
  )
}
