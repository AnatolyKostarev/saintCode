import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { Title } from '../../ui/Title'
import { HeroArticle } from '../../ui/HeroArticle'
import heroBG from './hero-bg.webp'
import heroBGR from './hero-bg-res.jpg'
import s from './Hero.module.sass'
import { LangSwitcher } from '../LangSwitcher'

export const Hero = () => {
  const { innerWidth: width } = window

  const HERO_BG = {
    backgroundImage: `url(${width > 976 ? heroBG : heroBGR})`,
  }

  const { t } = useTranslation()

  return (
    <Section style={HERO_BG} className={s.Hero}>
      <Container className={s.container}>
        <p className={s.Hero__subtitle}>
          {t('Hero.title')}
          &nbsp;
          {/* Перезапусти карьеру&nbsp; */}
          <span className={s.mark}>
            —
            {' '}
            {t('Hero.message')}
            {/* — научись программировать */}
          </span>
        </p>
        <HeroArticle>
          <Title className={s.title}>
            {t('Hero.school')}
            {/* Школа программирования */}
            <br />
            <span className={s.mark}>
              {t('Hero.web')}
              {/* для&nbsp;веб-разработчиков в&nbsp;формате буткемпа: */}
            </span>
            <br />
            {t('Hero.junior')}
            {/* с&nbsp;0&nbsp;до&nbsp;Junior за&nbsp;3&nbsp;месяца, */}
            <br />
            <span className={s.mark}>
              {t('Hero.offLine')}
              {/* вживую в&nbsp;СПб&nbsp;или&nbsp;онлайн из&nbsp;любой точки */}
            </span>
          </Title>
        </HeroArticle>
      </Container>
      {width > 1471
        && <LangSwitcher />}
    </Section>
  )
}
