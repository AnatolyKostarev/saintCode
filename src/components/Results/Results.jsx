import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { ResultsArticle } from '../../ui/ResultsArticle'
import { resultData } from './resultData'
import s from './Results.module.sass'

export const Results = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.Results}>
      <Container className={s.Results__container}>
        <div className={s.left}>
          <SectionTitle className={s.title}>
            {t('Results.title')}
            {' '}
            <span className="transparent--blue">
              {t('Results.title1')}
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
