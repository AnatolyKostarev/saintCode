import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import { Header } from '../../components/Header/Header'
import s from './Preprogram.module.sass'

export const Preprogram = () => {
  return (
    <>
      <Header />
      <Section className={s.program}>
        <Container>
          <h2>Подготовительная программа</h2>
        </Container>
      </Section>
    </>
  )
}
