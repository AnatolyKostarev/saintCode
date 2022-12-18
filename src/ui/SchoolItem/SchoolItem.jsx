import React from 'react'
import clsx from 'clsx'
import s from './SchoolItem.module.sass'

export const SchoolItem = ({
  className, children, id, title, onClick, show,
}) => {
  return (
    <>
      <div className={clsx(s.school__item, { [s.school__item__active]: show }, className)}>
        <button
          className={s.school__btn}
          id={id}
          type="button"
          onClick={onClick}
        >
          <p>
            {title}
          </p>
          <div className={clsx(s.school__cross, { [s.school__cross__rotate]: show })}>
            <span className={clsx(s.school__cross_item)}>&#10006;</span>
          </div>
        </button>
        {children}
      </div>
    </>
  )
}
