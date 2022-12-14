import React from 'react'
import clsx from 'clsx'
import delivered from './icon-positive-sent.svg'
import failure from './icon-negative-sent.svg'
import './Alert.css'

export const Alert = ({ className, type = 'success' }) => {
  const positiveInfo = (
    <>
      Скоро мы свяжемся с тобой
    </>
  )

  const negativeInfo = (
    <>
      Попробуй отправить позже
      или пиши на
      {' '}
      <a href="mailto:enter@saintcode.ru" style={{ textDecoration: 'underline' }}>
        enter@saintcode.ru
      </a>
    </>
  )

  return (
    <div
      className={clsx('alert', className)}
      type={type}
    >
      <div>
        <div>
          <img src={type !== 'success' ? failure : delivered} alt="" width="130" height="130" />
        </div>
        <p className="title">
          {type !== 'success' ? 'Ошибка' : 'Отправлено'}
        </p>
        <p className="subtitle">
          {type !== 'success' ? negativeInfo : positiveInfo}
        </p>
      </div>
    </div>
  )
}
