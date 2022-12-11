import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import schoolLogo from './school-logo.svg'
import s from './Logo.module.sass'

export const Logo = ({ className }) => {
  return (
    <Link to="/">
      <div className={clsx(s.Logo)}>
        <img
          className={clsx(s.logo__img, className)}
          src={schoolLogo}
          alt="SaintCode - logo"
        />
      </div>
    </Link>
  )
}
