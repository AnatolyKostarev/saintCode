import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { Title } from '../../ui/Title'
import { HeroArticle } from '../../ui/HeroArticle'
import { LangSwitcher } from '../LangSwitcher'
import heroBG from './hero-bg.webp'
import heroBGR from './hero-bg-res.jpg'
import s from './Hero.module.sass'

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
          <span className={s.mark}>
            —
            {' '}
            {t('Hero.message')}
          </span>
        </p>
        <HeroArticle>
          <Title className={s.title}>
            {t('Hero.school')}
            <br />
            <span className={s.mark}>
              {t('Hero.web')}
            </span>
            <br />
            {t('Hero.junior')}
            <br />
            <span className={s.mark}>
              {t('Hero.offLine')}
            </span>
          </Title>
        </HeroArticle>
      </Container>
      {width > 1471
        && <LangSwitcher />}
    </Section>
  )
}
