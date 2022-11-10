import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import s from './Nav.module.sass'

export const Nav = () => {
  const { t } = useTranslation()
  return (
    <nav className={clsx(s.Nav)}>
      <ul className={clsx(s.list)}>
        <li>
          <Link to="/school">
            {t('Nav.school')}
          </Link>
        </li>
        <li>
          <Link to="/program">
            {t('Nav.program')}
          </Link>
        </li>
        <li>
          <Link to="/faq">
            {t('Nav.faq')}
          </Link>
        </li>
        <li>
          <Link to="/blog">
            {t('Nav.blog')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
