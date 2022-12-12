import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { PriceCard } from '../../ui/PriceCard'
import { dataPrice } from './dataPrice'
import { SignUpForm } from '../../widgets/SignUpForm'
import s from './Price.module.sass'

export const Price = () => {
  const { t } = useTranslation()
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  return (
    <Section className={s.Price}>
      <Container className={s.container}>
        <SectionTitle className={s.Price__title}>
          {t('Price.title')}
        </SectionTitle>
        <div className={s.Price__wrapper}>
          {dataPrice.map(({ ...elem }) => (
            <PriceCard
              key={elem.id}
              {...elem}
              onClick={() => setIsSignUpForm(true)}
            />
          ))}
        </div>
        {isSignUpForm && <SignUpForm setIsSignUpForm={setIsSignUpForm} />}
      </Container>
    </Section>
  )
}
