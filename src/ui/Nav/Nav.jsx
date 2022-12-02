import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import s from './Nav.module.sass'

export const Nav = ({ className }) => {
  const { t } = useTranslation()

  return (
    <nav className={clsx(s.Nav)}>
      <ul className={clsx(s.Nav__list, className)}>
        <li className={clsx(s.Nav__item)}>
          <Link className={s.lnk} to="/school">
            {t('Nav.school')}
          </Link>
        </li>
        <li className={clsx(s.Nav__item)}>
          <Link className={s.lnk} to="/program">
            {t('Nav.program')}
          </Link>
        </li>
        <li className={clsx(s.Nav__item)}>
          <Link className={s.lnk} to="/faq">
            {t('Nav.faq')}
          </Link>
        </li>
        <li className={clsx(s.Nav__item)}>
          <Link className={s.lnk} to="/blog">
            {t('Nav.blog')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
