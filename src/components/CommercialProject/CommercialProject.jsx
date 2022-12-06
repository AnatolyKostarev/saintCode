import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import s from './CommercialProject.module.sass'

export const CommercialProject = () => {
  return (
    <Section className={s.CommercialProject}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          <span className="transparent">
            А&nbsp;ещё мы&nbsp;
          </span>
          дадим возможность выполнить простой коммерческий
          проект
          <span className="transparent">
                &nbsp;— получить первые деньги за&nbsp;свой код
          </span>
        </SectionTitle>
        <div className={s.intersec}>
          <p className={s.intersec__text}>
            <span className={s.gray}>
              Но&nbsp;самое важное: когда компании будут
              решать, кого из&nbsp;новичков взять,
              они
            </span>
&nbsp;отдадут предпочтение кандидату
            <br />
            {' '}
            с&nbsp;реальным опытом
          </p>
        </div>
      </Container>
    </Section>
  )
}
