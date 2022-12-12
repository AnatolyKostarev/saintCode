import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { ConsultForm } from '../../widgets/ConsultForm'
import { Logo } from '../../ui/Logo'
import { Phone } from '../../ui/Phone'
import { Button } from '../../ui/Button'
import cross from './cross.svg'
import s from './HeaderResponsive.module.sass'

export const HeaderResponsive = () => {
  const [opened, setOpened] = useState(false)
  const [isConsultForm, setIsConsultForm] = useState(false)

  const { t } = useTranslation()

  return (
    <div className={clsx(s.HeaderResponsive, { [s.bg]: opened })}>
      <input
        className={s.checkbox}
        onClick={() => setIsConsultForm(false)}
        onChange={() => setOpened(!opened)}
        type="checkbox"
        name="menu"
        id="menu_check"
      />
      <div className={s.btn}>
        <div className={s.lines}>
          <span className={s.line} />
          <span className={s.line} />
          <span className={s.line} />
        </div>
      </div>
      <aside className={s.aside}>
        <div className={s.top}>
          <div>
            <Logo className={s.logo} />
          </div>
          <img className={s.cross} src={cross} alt="x" />
          <nav>
            <ul className={s.list}>
              <li>
                <Link className={clsx(s.lnk, { [s.active]: location.pathname === '/' })} to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={clsx(s.lnk, { [s.active]: location.pathname === '/school' })} to="/school">
                  О школе
                </Link>
              </li>
              <li>
                <Link className={clsx(s.lnk, { [s.active]: location.pathname === '/program' })} to="/program">
                  Подготовительная программа
                </Link>
              </li>
              <li>
                <Link className={clsx(s.lnk, { [s.active]: location.pathname === '/faq' })} to="/faq">
                  ЧАВО
                </Link>
              </li>
              <li>
                <Link className={clsx(s.lnk, { [s.active]: location.pathname === '/blog' })} to="/blog">
                  Блог
                </Link>
              </li>
              <li>
                <Link className={clsx(s.lnk)} to="/">
                  Самостоятельное обучение
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.bottom}>
          <Phone className={s.phone} />
          <Button
            className={s.call__btn}
            text={t('Header.btn')}
            onClick={() => setIsConsultForm(true)}
          />
        </div>
        {isConsultForm && <ConsultForm setIsConsultForm={setIsConsultForm} />}
      </aside>
    </div>
  )
}
