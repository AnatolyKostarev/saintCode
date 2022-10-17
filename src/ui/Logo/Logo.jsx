import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import schoolLogo from './school-logo.svg'
import s from './Logo.module.sass'

const Logo = () => {
  return (
    <Link to="/">
      <div className={clsx(s.Logo)}>
        <img
          className={clsx('logo__img')}
          src={schoolLogo}
          alt="SaintCode - logo"
          width="160"
          height="64"
        />
      </div>
    </Link>
  )
}

export default Logo