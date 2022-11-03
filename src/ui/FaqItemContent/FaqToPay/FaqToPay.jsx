import React from 'react'
import clsx from 'clsx'
import s from './FaqToPay.module.sass'

export const FaqToPay = ({ className, show }) => {
  return (
    <div
      className={clsx(
        s.faq__content,
        { [s.faq__content__active]: show },
        className,
      )}
    >
      <p>
        Наличными или переводом по реквизитам.
      </p>
      <p>
        Есть кредит (рассрочка) до 2 лет от Тинькофф банк.
      </p>
    </div>
  )
}
