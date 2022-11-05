import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { Title } from '../../ui/Title'
import { HeroArticle } from '../../ui/HeroArticle'
import s from './Hero.module.sass'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.Hero}>
      <Container className={s.container}>
        <Title>
          {t('Hero.title')}
          <span className="transparent">
            {' '}
            ——
            <br />
            {t('Hero.message')}
          </span>
        </Title>
      </Container>
      <HeroArticle>
        <p>
          {t('Hero.school')}
          <br />
          {' '}
          <span className="transparent">
            {t('Hero.web')}
          </span>
          <br />
          {t('Hero.junior')}
          <br />
          {' '}
          <span className="transparent">
            {t('Hero.offLine')}
          </span>
        </p>
      </HeroArticle>
    </Section>
  )
}
