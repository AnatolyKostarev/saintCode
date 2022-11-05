import React from 'react'
import s from './SchoolItem.module.sass'

export const SchoolItem = ({
  show, full, hide, isPlus, isCross, title, content, onClick,
}) => {
  return (
    <div className={s.school__item} style={show ? hide : full}>
      <div className={s.school__btns}>
        <button type="button" onClick={onClick}>
          {title}
          <div className={s.school__cross} style={show ? isPlus : isCross}>
            &#10006;
          </div>
        </button>
      </div>
      <p
        className={s.school__text}
        style={
        show
          ? { opacity: 0, transition: '0.4s' }
          : { opacity: 1, transition: '1.2s' }
      }
      >
        {content}
      </p>
    </div>
  )
}
