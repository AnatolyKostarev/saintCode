import { Layout } from '../../layout'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import s from './Preprogram.module.sass'

export const Preprogram = () => {
  return (
    <Layout>
      <Section className={s.Program}>
        <Container>
          <h2>
            Подготовительная программа
          </h2>
        </Container>
      </Section>
    </Layout>
  )
}
