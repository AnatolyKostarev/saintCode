import clsx from 'clsx'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import { Header } from '../../components/Header/Header'
import CryCat from '../../ui/CryCat/CryCat'
import NotFoundArticle from '../../ui/NotFoundArticle/NotFoundArticle'
import s from './NotFound.module.sass'

export const NotFound = () => {
  return (
    <>
      <Header />
      <Section className={clsx(s.notFound)}>
        <Container className={clsx(s.container)}>
          <CryCat />
          <NotFoundArticle />
        </Container>
      </Section>
    </>
  )
}
