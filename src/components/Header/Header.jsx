import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../ui/Logo/Logo'
import Phone from '../../ui/Phone/Phone'
import Nav from '../../ui/Nav/Nav'
import Button from '../../ui/Button/Button'
import s from './Header.module.sass'

export const Header = () => {
  const { t, i18n } = useTranslation()

  // For test translation
  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <header className={s.Header}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <Logo />
          <Phone />
        </div>
        <div className={s.block}>
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
