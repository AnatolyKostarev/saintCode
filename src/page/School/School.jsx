import { Layout } from '../../layout'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import s from './School.module.sass'

export const School = () => {
  return (
    <Layout>
      <Section className={s.school}>
        <Container>
          <h2>
            О Школе
          </h2>
        </Container>
      </Section>
    </Layout>
  )
}
