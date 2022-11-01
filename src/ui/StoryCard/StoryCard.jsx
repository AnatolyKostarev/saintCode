import React from 'react'
import clsx from 'clsx'
import s from './StoryCard.module.sass'

export const StoryCard = ({
  studentPhoto,
  studentName,
  studentAge,
  studentResult,
  genderOption,
  children,
}) => {
  return (
    <div className={clsx(s.StoryCard)}>
      <div className={clsx(s.student)}>
        <div className={clsx(s.photo__wrapper)}>
          <img className={s.photo} width="104" height="104" src={studentPhoto} alt="Student - Photo" />
        </div>
        <div className={clsx(s.info__wrapper)}>
          <p className={clsx(s.name)}>
            {studentName}
          </p>
          <p className={clsx(s.age)}>
            {studentAge}
          </p>
        </div>
      </div>
      <div className={clsx(s.story)}>
        <strong className={clsx(s.result)}>
          {genderOption}
          <span className={clsx(s.result__company)}>
            {studentResult}
          </span>
        </strong>
        <div className={clsx(s.qa)}>
          {children}
        </div>
      </div>
      <div className={clsx(s.more)}>
        <span className={clsx(s.more__dots)}>
          ...
        </span>
      </div>
    </div>
  )
}
