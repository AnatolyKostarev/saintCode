import React, { useState } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container'
import { Nav } from '../../ui/Nav'
import { Logo } from '../../ui/Logo'
import { Button } from '../../ui/Button'
import { ConsultForm } from '../../widgets/ConsultForm'
import { LangSwitcher } from '../LangSwitcher'
import s from './Header.module.sass'

export const Header = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [isConsultForm, setIsConsultForm] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [startScrolled, setStartScrolled] = useState(false)
  const { innerWidth: width } = window

  const changeHeader = () => {
    window.scrollY >= 600 ? setScrolled(true) : setScrolled(false)
  }

  const startChangeHeader = () => {
    window.scrollY >= 100 && window.scrollY <= 700
      ? setStartScrolled(true)
      : setStartScrolled(false)
  }

  window.addEventListener('scroll', startChangeHeader)
  window.addEventListener('scroll', changeHeader)

  /* функция для изменения фона header, button в зависимости от адреса страницы */
  const background = {}
  const changeBcg = () => {
    switch (pathname) {
      case '/school':
      case '/faq':
        background.header = 'rgba(62, 43, 46, 1)'
        background.button = 'rgba(233, 122, 140, 1)'
        break
      case '/blog':
      case '/blog/time':
      case '/blog/backend':
      case '/blog/frontend':
      case '/blog/interviewPoddubny':
      case '/blog/human_resources_it':
      case '/blog/interviewPolyakov':
        background.header = 'rgba(72, 68, 57, 1)'
        background.button = 'rgba(255, 200, 52, 1)'
        break

      default:
        background.header = ''
        background.button = ''
    }
    return background
  }
  changeBcg()

  return (
    <header
      className={clsx(s.Header, {
        [s.scrolled__start]: startScrolled && width > 976,
        [s.scrolled]: scrolled && width > 976,
      })}
      style={{ background: !scrolled ? background.header : 'rgb(70, 70, 70)' }}
    >
      <Container className={s.container}>
        <div className={s.wrapper}>
          <div className={s.block}>
            <Logo className={clsx({ [s.scrolled__logo]: scrolled && width > 976 })} />
            {width <= 1471 && !scrolled
              && <LangSwitcher />}
          </div>
          <div className={s.block_right}>
            <Nav />
            <Button
              className={clsx(s.header__btn, { [s.scrolled__btn]: scrolled && width > 976 })}
              onClick={() => setIsConsultForm(true)}
              text={t('Header.btn')}
              style={{ background: background.button }}
            />
          </div>
        </div>
        {isConsultForm && <ConsultForm setIsConsultForm={setIsConsultForm} />}
      </Container>
    </header>
  )
}
