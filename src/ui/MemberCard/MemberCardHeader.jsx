import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './MemberCard.module.sass'

export const MemberCardHeader = ({
  className, commonImg, retinaImg, status, memberName,
}) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.member__header, className)}>
      <img
        className={s.member__icon}
        srcSet={`${commonImg} 1x, ${retinaImg} 2x`}
        width="140"
        height="140"
        alt="member"
      />
      <div className={s.member__titles}>
        <p className={s.member__name}>
          {t(`Member.name.${memberName}`)}
        </p>
        <p className={s.member__status}>
          {t(`Member.status.${status}`)}
        </p>
      </div>
    </div>
  )
}
