import React from 'react'
import clsx from 'clsx'
import s from './MemberCard.module.sass'

export const MemberCardContent = ({ className, content, title }) => {
  return (
    <ul className={clsx(s.member__content, className)}>
      <p className={s.member__title}>
        {title ?? null}
      </p>
      {content ? content.map(elem => (
        elem ? (
          <li className={s.member__description} key={elem}>
            <span>
              { elem }
            </span>
          </li>
        ) : null
      )) : null}
    </ul>
  )
}
