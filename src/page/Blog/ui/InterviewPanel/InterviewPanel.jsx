import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import s from './InterviewPanel.module.sass'

export const InterviewPanel = ({
  className,
  interviewer,
  background,
  text,
  position = 'left',
  keyTranslate,
}) => {
  const iconLeft = (
    <svg
      role="presentation"
      width="33px"
      height="24px"
      viewBox="0 0 33 24"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          transform="translate(-1244.000000, -3123.000000)"
          fill="#141721"
        >
          <path d="M1255,3123c0,0-0.7,5.7-2,8.8c-1.9,4.3-7.7,13.4-7.7,13.4s9.3-2.5,18-8.8c2.6-1.9,10.4-11,12.6-13.5" />
        </g>
      </g>
    </svg>
  )

  const iconRight = (
    <svg
      role="presentation"
      width="33px"
      height="24px"
      viewBox="0 0 33 24"
    >
      {' '}
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        {' '}
        <g
          transform="translate(-1244.000000, -3123.000000)"
          fill="#3c4154"
        >
          {' '}
          <path
            d="M1275.13811,3123 C1272.95728,3125.43852 1265.08297,3134.61485 1262.52627,3136.47672 C1253.84354,3142.79977 1244.5,3145.28571 1244.5,3145.28571 C1244.5,3145.28571 1250.29058,3136.12799 1252.15133,3131.84682 C1253.51931,3128.69942 1254.18621,3123 1254.18621,3123"
            transform="translate(1259.819055, 3134.142857) scale(-1, 1) translate(-1259.819055, -3134.142857) "
          />{' '}
        </g>{' '}
      </g>{' '}
    </svg>
  )

  const leftIconPosition = {
    position: 'absolute',
    bottom: '-26px',
    left: '17px',
  }

  const rightIconPosition = {
    position: 'absolute',
    bottom: '-26px',
    right: '17px',
  }

  const { t } = useTranslation()

  return (
    <div
      className={clsx(s.panel, className)}
      style={{ background }}
    >
      <p className={s.panel__name}>
        {t(`${keyTranslate}.interviewer.${interviewer}`)}
      </p>
      <div className={s.panel__text}>
        {text.map(elem => (
          <p key={elem}>{t(`${keyTranslate}.text.${elem}`)}</p>
        ))}
      </div>
      <div
        className={s.icon}
        style={position === 'left' ? leftIconPosition : rightIconPosition}
      >
        {position === 'left' ? iconLeft : iconRight}
      </div>
    </div>
  )
}
