import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import ResultsArticle from '../../ui/ResultsArticle/ResultsArticle'
import { resultData } from './resultData'
import s from './Results.module.sass'

const Results = () => {
  return (
    <Section className={s.Results}>
      <Container className={s.Results__container}>
        <div className={s.left}>
          <SectionTitle>
            Что ты получишь
            {' '}
            <span className="transparent--blue">
              в&nbsp;нашем буткемпе?
            </span>
          </SectionTitle>
        </div>
        <div className={s.right}>
          {resultData.map(({ ...elem }) => (
            <ResultsArticle className={s.Results__article} {...elem} key={elem.id} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Results
