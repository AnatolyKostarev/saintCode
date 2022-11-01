import React from 'react'
import s from './SchoolItem.module.sass'

export const SchoolItem = ({
  children, id, title, onClick, show,
}) => {
  return (
    <>
      <div className={show ? s.school__item : s.school__item__active}>
        <button
          className={s.school__btn}
          id={id}
          type="button"
          onClick={onClick}
        >
          <p>
            {title}
          </p>
          <p className={show ? s.school__cross : s.school__cross__rotate}>
            &#10006;
          </p>
        </button>
        {children}
      </div>
    </>
  )
}
