import React from 'react'
import { Link } from 'react-router-dom'
import s from './HeaderResponsive.module.sass'
import { Logo } from '../../ui/Logo'
import { Phone } from '../../ui/Phone'
import { Button } from '../../ui/Button'
import cross from './cross.svg'

export const HeaderResponsive = () => {
  return (
    <div className={s.HeaderResponsive}>
      <input className={s.checkbox} type="checkbox" name="menu" id="menu_check" />
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
                <Link className={s.lnk} to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={s.lnk} to="/school">
                  О школе
                </Link>
              </li>
              <li>
                <Link className={s.lnk} to="/program">
                  Подготовительная программа
                </Link>
              </li>
              <li>
                <Link className={s.lnk} to="/faq">
                  ЧАВО
                </Link>
              </li>
              <li>
                <Link className={s.lnk} to="/blog">
                  Блог
                </Link>
              </li>
              <li>
                <Link className={s.lnk} to="/">
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
            text="Люблю поговорить, позвони мне"
          />
        </div>
      </aside>
    </div>
  )
}
