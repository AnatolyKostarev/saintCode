import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import s from './Header.module.sass'
import Logo from '../../ui/Logo/Logo'
import Phone from '../../ui/Phone/Phone'
import Nav from '../../ui/Nav/Nav'
import Button from '../../ui/Button/Button'

export const Header = () => {
  const { t, i18n } = useTranslation()

  // For test translation
  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <header className={clsx(s.Header)}>
      <div className={clsx(s.wrapper)}>
        <div className={clsx(s.block)}>
          <Logo />
          <Phone />
        </div>
        <div className={clsx(s.block)}>
          <Nav />
          <Button
            className={s.header__btn}
            onClick={toggleLang}
            text={t('Люблю поговорить, позвони мне')}
          />
        </div>
      </div>
    </header>
  )
}
