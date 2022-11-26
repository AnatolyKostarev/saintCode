import React, { useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { SchoolItem } from '../../ui/SchoolItem'
import { FaqRequirements } from '../../ui/FaqItemContent/FaqRequirements'
import { FaqTodo } from '../../ui/FaqItemContent/FaqTodo'
import { FaqToPay } from '../../ui/FaqItemContent/FaqToPay'
import { Button } from '../../ui/Button'
import s from './FaqInfo.module.sass'

export const FaqInfo = () => {
  const [isRequire, setIsRecuire] = useState(true)
  const [isTodo, setIsTodo] = useState(false)
  const [isPay, setIsPay] = useState(false)

  const { t } = useTranslation()

  const isRequireSwitcher = () => {
    setIsRecuire(!isRequire)
  }

  const isTodoSwitcher = () => {
    setIsTodo(!isTodo)
  }

  const isPaySwitcher = () => {
    setIsPay(!isPay)
  }

  return (
    <Section className={s.faq}>
      <Container>
        <div className={s.faq__header}>
          <SectionTitle className={s.faq__title}>
            {t('FaqInfo.title')}
          </SectionTitle>
          <div className={s.faq__ask}>
            <p>
              {t('FaqInfo.ask')}
            </p>
            <Button
              className={s.faq__btn}
              text={t('FaqInfo.btnText')}

            />
          </div>
        </div>

        <div className={s.faq__items}>
          <SchoolItem
            className={clsx(s.faq__item, { [s.faq__item__active]: isRequire })}
            title={t('FaqInfo.requirements')}
            id={1}
            onClick={isRequireSwitcher}
            show={isRequire}
          >
            <FaqRequirements show={isRequire} />
          </SchoolItem>

          <SchoolItem
            className={clsx(s.faq__item, { [s.faq__item__active]: isTodo })}
            title={t('FaqInfo.todo')}
            id={1}
            onClick={isTodoSwitcher}
            show={isTodo}
          >
            <FaqTodo show={isTodo} />
          </SchoolItem>
          <SchoolItem
            className={clsx(s.faq__item_last, { [s.faq__item__active]: isPay })}
            title={t('FaqInfo.payment')}
            id={1}
            onClick={isPaySwitcher}
            show={isPay}
          >
            <FaqToPay show={isPay} />
          </SchoolItem>
        </div>
      </Container>
    </Section>
  )
}
