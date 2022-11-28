import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './LangSwitcher.module.sass'
import { Button } from '../../ui/Button'

export const LangSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div className={s.LangSwitcher}>
      <Button
        className={s.LangSwitcher__btn}
        text="RU / ENG"
        onClick={toggleLang}
      />
    </div>
  )
}
