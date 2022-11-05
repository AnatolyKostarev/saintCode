import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { TeacherCard } from '../../ui/TeacherCard'
import { teachersData } from './teachersData'
import s from './Teachers.module.sass'

export const Teachers = () => {
  return (
    <Section className={s.Teachers}>
      <Container>
        <SectionTitle>
          Преподаватели
        </SectionTitle>
        <div className={s.cards__container}>
          {teachersData.map(({ ...elem }) => (
            <TeacherCard {...elem} key={elem.id}>
              {elem.list.map(list => (
                <ul className={s.list} key={list}>
                  <li className={s.list__item}>
                    {list}
                  </li>
                </ul>

              ))}
            </TeacherCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}
