import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { TeacherCard } from '../../ui/TeacherCard'
import { teachersData } from './teachersData'
import s from './Teachers.module.sass'

export const Teachers = () => {
  const { t } = useTranslation()

  return (
    <Section className={s.Teachers}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          {t('Teachers.title')}
        </SectionTitle>
        <div className={s.cards__container}>
          {teachersData.map(({ ...elem }) => (
            <TeacherCard {...elem} key={elem.id}>
              <ul className={s.list}>
                {elem.list.map(list => (
                  <li key={list} className={s.list__item}>
                    {t(`TeacherCard.list.${list}`)}
                  </li>
                ))}
              </ul>
            </TeacherCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
