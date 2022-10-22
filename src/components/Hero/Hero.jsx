import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import Title from '../../ui/Title/Title'
import HeroArticle from '../../ui/HeroArticle/HeroArticle'
import s from './Hero.module.sass'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <Section className={clsx(s.Hero)}>
      <Container className={clsx(s.container)}>
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
