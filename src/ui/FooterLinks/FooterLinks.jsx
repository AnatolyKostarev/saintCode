import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import s from './FooterLinks.module.sass'

export const FooterLinks = ({ className }) => {
  return (
    <div className={clsx(s.FooterLinks, className)}>
      <Link to="/program">
        Подготовительная программа
      </Link>
      <Link to="/">
        Самостоятельное обучение
      </Link>
      <Link to="/school">
        Вакансии
      </Link>
    </div>
  )
}
