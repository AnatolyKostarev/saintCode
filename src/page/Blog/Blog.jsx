import { Layout } from '../../layout/Layout'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import s from './Blog.module.sass'

export const Blog = () => {
  return (
    <Layout>
      <Section className={s.blog}>
        <Container>
          <h2>
            Блог
          </h2>
        </Container>
      </Section>
    </Layout>
  )
}
