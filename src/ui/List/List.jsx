import React from 'react'
import s from './List.module.sass'

export const List = ({ items }) => {
  return (
    <>
      {items.map(elem => (
        <ul className={s.list} key={elem.id}>
          {elem.title ? (
            <p className={s.list__title}>
              &bull;
              { ' ' }
              {elem.title}
            </p>
          ) : null}
          {elem.items ? elem.items.map(item => (
            <li className={s.list__items} key={item}>
              {item}
            </li>
          )) : null}
        </ul>
      ))}
    </>
  )
}
