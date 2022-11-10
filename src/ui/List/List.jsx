import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './List.module.sass'

export const List = ({ items }) => {
  const { t } = useTranslation()
  return (
    <>
      {items.map(elem => (
        <ul className={s.list} key={elem.id}>
          {elem.title ? (
            <p className={s.list__title}>
              &bull;
              { ' ' }
              {t(`TrainingProgram.TrainingData.title.${elem.title}`)}
            </p>
          ) : null}
          {elem.items ? elem.items.map(item => (
            <li className={s.list__items} key={item}>
              {t(`TrainingProgram.TrainingData.items.${item}`)}
            </li>
          )) : null}
        </ul>
      ))}
    </>
  )
}
