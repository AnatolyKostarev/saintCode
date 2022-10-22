import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { Header } from '../../components/Header/Header'
import s from './Blog.module.sass'

export const Blog = () => {
  return (
    <>
      <Header />
      <Section className={s.blog}>
        <Container>
          <h2>
            Блог
          </h2>
        </Container>
      </Section>
    </>
  )
}
