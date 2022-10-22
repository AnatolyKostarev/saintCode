import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import s from './Nav.module.sass'

const Nav = () => {
  const { t } = useTranslation()
  return (
    <nav className={clsx(s.Nav)}>
      <ul className={clsx(s.list)}>
        <li>
          <Link to="/school">
            {t('О школе')}
          </Link>
        </li>
        <li>
          <Link to="/program">
            {t('Подготовительная программа')}
          </Link>
        </li>
        <li>
          <Link to="/faq">
            {t('ЧАВО')}
          </Link>
        </li>
        <li>
          <Link to="/blog">
            {t('Блог')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
