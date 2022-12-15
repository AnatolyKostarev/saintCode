import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './TeacherCard.module.sass'

export const TeacherCard = ({
  className,
  smallPhoto,
  largePhoto,
  teacherName,
  experience,
  traineeCount,
  stack,
  children,
}) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.TeacherCard, className)}>
      <div className={s.top}>
        <div className={s.photo__container}>
          <img
            className={s.img}
            srcSet={`${smallPhoto} 1x, ${largePhoto} 2x`}
            width="160"
            height="160"
            alt="Teacher photo"
          />
        </div>
        <div className={s.name__block}>
          <p className={s.name}>
            {t(`TeacherCard.teacherName.${teacherName}`)}
          </p>
          <p className={s.exp}>
            {t(`TeacherCard.experience.${experience}`)}
          </p>
          <p className={s.trainees}>
            {t(`TeacherCard.traineeCount.${traineeCount}`)}
          </p>
        </div>
      </div>
      <div className={s.notop}>
        <div className={s.middle}>
          <p className={s.working}>
            {t('TeacherCard.working')}
          </p>
          {children}
        </div>
        <div className={s.bottom}>
          <p className={s.stack}>
            {t(`TeacherCard.stack.${stack}`)}
          </p>
        </div>
      </div>
    </div>
  )
}
