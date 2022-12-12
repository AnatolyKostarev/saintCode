import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/Button'
import s from './LangSwitcher.module.sass'

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
