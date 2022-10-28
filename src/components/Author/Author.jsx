import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import AuthorPhoto from './Author.png'
import AuthorPhoto2x from './Author2x.png'
import Devis from './devis.svg'
import s from './Author.module.sass'

const Author = () => {
  return (
    <Section className={s.Author}>
      <Container className={s.Author__container}>
        <div className={s.left}>
          <div className={s.img__container}>
            <img
              className={s.img}
              srcSet={`${AuthorPhoto} 1x, ${AuthorPhoto2x} 2x`}
              width="370"
              height="370"
              alt="Author photo"
            />
          </div>
          <div className={s.text}>
            <p className={s.Author__name}>
              Женя Гриценко
            </p>
            <p className={s.Author__info}>
              Основатель курса
            </p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.devis__block}>
            <img
              className={s.devis}
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
