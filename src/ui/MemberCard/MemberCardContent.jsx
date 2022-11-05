import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './MemberCard.module.sass'

export const MemberCardContent = ({
  className, content, education, title,
}) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.member__list, className)}>
      <ul className={clsx(s.member__content, className)}>
        {content ? content.map(elem => (
          elem ? (
            <li className={s.member__description} key={elem}>
              <span>
                {t(`Member.content.${elem}`)}
              </span>
            </li>
          ) : null
        )) : null}
      </ul>
      <ul className={clsx(s.member__content, className)}>
        <p className={s.member__title}>
          {title === undefined ? null : (t(`Member.title.${title}`))}
        </p>
        {education ? education.map(elem => (
          elem ? (
            <li className={s.member__description} key={elem}>
              <span>
                {t(`Member.education.${elem}`)}
              </span>
            </li>
          ) : null
        )) : null}
      </ul>
    </div>
  )
}
