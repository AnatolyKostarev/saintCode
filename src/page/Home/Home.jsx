import { Section } from '../../ui/Section/Section'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import s from './Home.module.sass'
import ForWho from '../../components/ForWho/ForWho'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Section className={s.hero}>
          <Hero />
          <ForWho />
        </Section>
      </main>
    </>
  )
}
