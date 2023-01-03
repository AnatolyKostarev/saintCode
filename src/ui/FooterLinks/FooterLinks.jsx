import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import s from './FooterLinks.module.sass'

export const FooterLinks = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.FooterLinks, className)}>
      <Link to="*">
        {t('FooterLink.item1')}
      </Link>
      <Link to="/">
        {t('FooterLink.item2')}
      </Link>
      <Link to="/school">
        {t('FooterLink.item3')}
      </Link>
    </div>
  )
}
