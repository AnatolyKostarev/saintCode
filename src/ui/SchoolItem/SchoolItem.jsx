import React from 'react'
import s from './SchoolItem.module.sass'

export const SchoolItem = ({
  id, title, content, onClick, show,
}) => {
  return (
    <div className={show ? s.school__item : s.school__item__active}>
      <button className={s.school__btn} id={id} type="button" onClick={onClick}>
        <p>
          {title}
        </p>
        <p className={show ? s.school__cross : s.school__cross__rotate}>
          &#10006;
        </p>
      </button>
      <p className={show ? s.school__content : s.school__content__active}>
        {content}
      </p>
    </div>
  )
}
