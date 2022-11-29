import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { Title } from '../../ui/Title'
import { HeroArticle } from '../../ui/HeroArticle'
import heroBG from './hero-bg.webp'
import s from './Hero.module.sass'

export const Hero = () => {
  const HERO_BG = {
    backgroundImage: `url(${heroBG})`,
    backgroundColor: '#39483d',
    width: '100%',
    height: '820px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
  return (
    <Section style={HERO_BG} className={s.Hero}>
      <Container>
        <p className={s.Hero__subtitle}>
          Перезапусти карьеру&nbsp;
          <span className={s.mark}>
            — научись программировать
          </span>
        </p>
        <HeroArticle>
          <Title>
            Школа программирования
            <br />
            <span className={s.mark}>
              для&nbsp;веб-разработчиков в&nbsp;формате буткемпа:
            </span>
            <br />
            с&nbsp;0&nbsp;до&nbsp;Junior за&nbsp;3&nbsp;месяца,
            <br />
            <span className={s.mark}>
              вживую в&nbsp;СПб&nbsp;или&nbsp;онлайн из&nbsp;любой точки
            </span>
          </Title>
        </HeroArticle>
      </Container>
    </Section>
  )
}
