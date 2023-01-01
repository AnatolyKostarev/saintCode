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
import { ConsultForm } from '../../widgets/ConsultForm'
import { Button } from '../../ui/Button'
import s from './FaqInfo.module.sass'

export const FaqInfo = () => {
  const [isRequire, setIsRecuire] = useState(true)
  const [isTodo, setIsTodo] = useState(false)
  const [isPay, setIsPay] = useState(false)
  const [isConsultForm, setIsConsultForm] = useState(false)

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
    <Section className={s.faqInfo}>
      <Container>
        <div className={s.faqInfo__header}>
          <SectionTitle className={s.faqInfo__title}>
            {t('FaqInfo.title')}
          </SectionTitle>
          <div className={s.faqInfo__ask}>
            <p>
              {t('FaqInfo.ask')}
            </p>
            <Button
              className={s.faqInfo__btn}
              text={t('FaqInfo.btnText')}
              onClick={() => setIsConsultForm(true)}
            />
          </div>
        </div>

        <div className={s.faqInfo__items}>
          <SchoolItem
            className={clsx(s.faqInfo__item, { [s.faqInfo__item__active]: isRequire })}
            title={t('FaqInfo.requirements')}
            id={1}
            onClick={isRequireSwitcher}
            show={isRequire}
          >
            <FaqRequirements show={isRequire} />
          </SchoolItem>

          <SchoolItem
            className={clsx(s.faqInfo__item, { [s.faqInfo__item__active]: isTodo })}
            title={t('FaqInfo.todo')}
            id={1}
            onClick={isTodoSwitcher}
            show={isTodo}
          >
            <FaqTodo show={isTodo} />
          </SchoolItem>
          <SchoolItem
            className={clsx(s.faqInfo__item_last, { [s.faqInfo__item__active]: isPay })}
            title={t('FaqInfo.payment')}
            id={1}
            onClick={isPaySwitcher}
            show={isPay}
          >
            <FaqToPay show={isPay} />
          </SchoolItem>
        </div>
        {isConsultForm && <ConsultForm setIsConsultForm={setIsConsultForm} />}
      </Container>
    </Section>
  )
}
