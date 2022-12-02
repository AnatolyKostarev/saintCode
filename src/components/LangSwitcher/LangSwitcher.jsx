import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
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
        className={clsx(s.LangSwitcher__btn, { [s.LangSwitcher__ru]: i18n.language === 'ru', [s.LangSwitcher__eng]: i18n.language === 'en' })}
        text="ENG / RU"
        onClick={toggleLang}
      />
    </div>
  )
}
