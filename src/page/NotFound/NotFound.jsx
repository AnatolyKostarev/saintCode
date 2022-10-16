import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import s from './NotFound.module.sass'

export const NotFound = () => {
  return (
    <>
      <Section className={s.notFound}>
        <Container>
          <h2>Страница не найдена</h2>
        </Container>
      </Section>
    </>
  )
}
