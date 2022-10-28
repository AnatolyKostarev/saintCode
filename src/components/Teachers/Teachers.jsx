import React from 'react'
import { Section } from '../../ui/Section/Section'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import { Container } from '../../ui/Container/Container'
import TeacherCard from '../../ui/TeacherCard/TeacherCard'
import { teachersData } from './teachersData'
import s from './Teachers.module.sass'

const Teachers = () => {
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
                <ul className={s.list}>
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

export default Teachers
