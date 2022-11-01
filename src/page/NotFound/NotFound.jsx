import { Header } from '../../components/Header'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { CryCat } from '../../ui/CryCat'
import { NotFoundArticle } from '../../ui/NotFoundArticle'
import s from './NotFound.module.sass'

export const NotFound = () => {
  return (
    <>
      <Header />
      <Section className={s.NotFound}>
        <Container className={s.container}>
          <CryCat />
          <NotFoundArticle />
        </Container>
      </Section>
    </>
  )
}
