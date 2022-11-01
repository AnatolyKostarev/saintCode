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
          {t('Перезапусти карьеру')}
          <span className="transparent">
            {' '}
            ——
            <br />
            {t('научись программировать')}
          </span>
        </Title>
      </Container>
      <HeroArticle>
        <p>
          {t('Школа программирования')}
          <br />
          {' '}
          <span className="transparent">
            {t('для веб-разработчиков в формате буткемпа:')}
          </span>
          <br />
          {t('с 0 до Junior за 3 месяца,')}
          <br />
          {' '}
          <span className="transparent">
            {t('вживую в СПб или онлайн из любой точки')}
          </span>
        </p>
      </HeroArticle>
    </Section>
  )
}
