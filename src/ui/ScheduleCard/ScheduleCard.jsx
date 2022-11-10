import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { TimeIcon } from '../TimeIcon/TimeIcon'
import s from './ScheduleCard.module.sass'

export const ScheduleCard = ({ text, time }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.schedule__card)}>
      <TimeIcon time={time} />
      <p>
        {t(`ScheduleCard.${text}`)}
      </p>
    </div>
  )
}
