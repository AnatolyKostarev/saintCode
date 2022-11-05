import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { PriceCard } from '../../ui/PriceCard'
import { dataPrice } from './dataPrice'
import s from './Price.module.sass'

export const Price = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.Price}>
      <Container>
        <SectionTitle className={s.Price__title}>
          {t('Price.title')}
        </SectionTitle>
        <div className={s.Price__wrapper}>
          {dataPrice.map(({ ...elem }) => (
            <PriceCard key={elem.id} {...elem} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
