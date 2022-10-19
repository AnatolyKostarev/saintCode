import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import Title from '../../ui/Title/Title'
import HeroArticle from '../../ui/HeroArticle/HeroArticle'
import s from './Hero.module.sass'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.Hero}>
      <Container className={s.container}>
        <p>
          {t('Перезапусти карьеру')}
          <span className="transparent">
            {' '}
            ——
            <br />
            {t('научись программировать')}
          </span>
        </p>
      </Container>
      <HeroArticle>
        <Title>
          {t('Школа программирования')}
          <br />
          <span className="transparent">
            {t('для веб-разработчиков в формате буткемпа:')}
          </span>
          <br />
          {t('с 0 до Junior за 3 месяца,')}
          <br />
          <span className="transparent">
            {t('вживую в СПб или онлайн из любой точки')}
          </span>
        </Title>
      </HeroArticle>
    </Section>
  )
}
