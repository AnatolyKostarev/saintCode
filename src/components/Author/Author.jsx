import React from 'react'
import clsx from 'clsx'
import s from './Author.module.sass'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import AuthorPhoto from './Author.png'
import AuthorPhoto2x from './Author2x.png'
import Devis from './devis.svg'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'

const Author = ({ className }) => {
  return (
    <Section className={clsx(s.Author, className)}>
      <Container className={s.Author__container}>
        <div className={clsx(s.left)}>
          <div className={clsx(s.img__container)}>
            <img
              className={clsx(s.img)}
              srcSet={`${AuthorPhoto} 1x, ${AuthorPhoto2x} 2x`}
              width="370"
              height="370"
              alt="Author photo"
            />
          </div>
          <div className={clsx(s.text)}>
            <p className={clsx(s.Author__name)}>
              Женя Гриценко
            </p>
            <p className={clsx(s.Author__info)}>
              Основатель курса
            </p>
          </div>
        </div>
        <div className={clsx(s.right)}>
          <div className={clsx(s.devis__block)}>
            <img
              className={clsx(s.devis)}
              src={Devis}
              width="38"
              height="36"
              alt="``"
            />
          </div>
          <SectionTitle className={s.title}>
            Мы помогаем людям без&nbsp;опыта
            {' '}
            <span className="transparent">
              (с&nbsp;небольшим опытом)
            </span>
            {' '}
            в&nbsp;программировании получить
            первую работу веб-разработчиком.
            В&nbsp;среднем наши студенты
            устраиваются через 2&nbsp;месяца
            после выпуска.
          </SectionTitle>
        </div>
      </Container>
    </Section>
  )
}

export default Author
