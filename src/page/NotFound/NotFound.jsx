import clsx from 'clsx'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import s from './NotFound.module.sass'
import CryCat from '../../ui/CryCat/CryCat'
import NotFoundArticle from '../../ui/NotFoundArticle/NotFoundArticle'
import { Header } from '../../components/Header/Header'

export const NotFound = () => {
  return (
    <>
      <Header />
      <Section className={clsx(s.NotFound)}>
        <Container className={clsx(s.container)}>
          <CryCat />
          <NotFoundArticle />
        </Container>
      </Section>
    </>
  )
}
