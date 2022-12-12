import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import s from './PriceCard.module.sass'

export const PriceCard = ({
  location,
  type,
  price,
  priceWithDiscount,
  discountLastDay,
  description,
  onClick,
}) => {
  const { t } = useTranslation()
  return (
    <div className={s.Price__card}>
      <div className={s.Price__header}>
        <p>
          {t(`PriceCard.location.${location}`)}
        </p>
      </div>
      <div>
        <p className={s.Price__discount}>
          <del>
            {new Intl.NumberFormat('ru-Ru').format(price)}
            {' '}
            {t('PriceCard.currency')}
          </del>
        </p>
        <p className={s.Price__real}>
          {new Intl.NumberFormat('ru-Ru').format(priceWithDiscount)}
          {' '}
          {t('PriceCard.currency')}
        </p>
        <p className={s.Price__startDate}>
          {t('PriceCard.start')}
          &nbsp;
          {t('PriceCard.locale')}
        </p>
        <p className={s.Price__finalDate}>
          {t('PriceCard.discount')}
          &nbsp;
          {t(`PriceCard.${discountLastDay}`)}
        </p>
        <p className={s.Price__type}>
          {t(`PriceCard.type.${type}`)}
        </p>
        <p className={s.Price__description}>
          {t(`PriceCard.description.${description}`)}
        </p>
      </div>
      <div className={s.Price__wrap}>
        <Button
          className={s.Price__btn}
          text={t('PriceCard.btn')}
          onClick={onClick}
        />
      </div>
    </div>
  )
}
