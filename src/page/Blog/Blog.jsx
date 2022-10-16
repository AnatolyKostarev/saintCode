import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import s from './Blog.module.sass'

export const Blog = () => {
  return (
    <>
      <Section className={s.blog}>
        <Container>
          <h2>Блог</h2>
        </Container>
      </Section>
    </>
  )
}
