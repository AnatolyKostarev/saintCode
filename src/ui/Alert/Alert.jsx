import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import delivered from './icon-positive-sent.svg'
import failure from './icon-negative-sent.svg'
import './Alert.css'

export const Alert = ({ className, type = 'success' }) => {
  const { t } = useTranslation()

  const positiveInfo = (
    <>
      {t('Alert.positiveInfo')}
    </>
  )

  const negativeInfo = (
    <>
      {t('Alert.negativeInfo')}
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
          {type !== 'success' ? t('Alert.error') : t('Alert.sent')}
        </p>
        <p className="subtitle">
          {type !== 'success' ? negativeInfo : positiveInfo}
        </p>
      </div>
    </div>
  )
}
