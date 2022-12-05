import React from 'react'
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
            {teacherName}
          </p>
          <p className={s.exp}>
            {`${experience} коммерческого опыта`}
          </p>
          <p className={s.trainees}>
            {traineeCount}
          </p>
        </div>
      </div>
      <div className={s.notop}>
        <div className={s.middle}>
          <p className={s.working}>
            Работал:
          </p>
          {children}
        </div>
        <div className={s.bottom}>
          <p className={s.stack}>
            {stack}
          </p>
        </div>
      </div>
    </div>
  )
}
