import React from 'react'
import clsx from 'clsx'
import s from './TeacherCard.module.sass'

const TeacherCard = ({
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
      <div className={clsx(s.top)}>
        <div className={clsx(s.photo__container)}>
          <img className={clsx(s.img)} srcSet={`${smallPhoto} 1x, ${largePhoto} 2x`} width="160" height="160" alt="Teacher photo" />
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
      <div className={clsx(s.middle)}>
        <p className={clsx(s.working)}>
          Работал:
        </p>
        { children }
      </div>
      <div className={clsx(s.bottom)}>
        <p className={s.stack}>
          {stack}
        </p>
      </div>
    </div>
  )
}

export default TeacherCard
