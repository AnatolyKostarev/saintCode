import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import { PriceCard } from '../../ui/PriceCard/PriceCard'
import { dataPrice } from './dataPrice'
import s from './Price.module.sass'

export const Price = () => {
  return (
    <Section className={s.Price}>
      <Container>
        <SectionTitle className={s.Price__title}>
          Сколько стоит?
        </SectionTitle>
        <div className={s.Price__wrapper}>
          {dataPrice.map(({ ...elem }) => (
            <PriceCard {...elem} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
