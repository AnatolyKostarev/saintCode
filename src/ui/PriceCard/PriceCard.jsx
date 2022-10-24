import React from 'react'
import Button from '../Button/Button'
import s from './PriceCard.module.sass'

export const PriceCard = ({
  icon,
  start,
  type,
  price,
  priceWithDiscount,
  discountLastDay,
  description,
}) => {
  return (
    <div className={s.Price__card}>
      <div className={s.Price__header}>
        <img src={icon} alt="offline" width="60" height="60" />
        <p>
          Дата старта:
          {' '}
          {start}
        </p>
      </div>
      <p className={s.Price__type}>
        {type}
      </p>
      <p className={s.Price__discount}>
        {new Intl.NumberFormat('ru-Ru').format(price)}
        {' '}
        руб.
      </p>
      <p className={s.Price__real}>
        {new Intl.NumberFormat('ru-Ru').format(priceWithDiscount)}
        {' '}
        руб.
      </p>
      <p className={s.Price__finalDate}>
        Скидка до
        {discountLastDay}
      </p>
      <p className={s.Price__description}>
        {description}
      </p>
      <Button className={s.Price__btn} text="Записаться на курс" />
    </div>
  )
}
