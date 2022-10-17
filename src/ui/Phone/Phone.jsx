import React from 'react'
import clsx from 'clsx'
import s from './Phone.module.sass'

const Phone = () => {
  return (
    <div className={clsx(s.Phone)}>
      <a href="tel:+79956263080">+7 995 626 3080</a>
    </div>
  )
}

export default Phone
