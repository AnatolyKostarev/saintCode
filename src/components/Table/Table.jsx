import React, { useState } from 'react'
import clsx from 'clsx'
import s from './Table.module.sass'
import { Section } from '../../ui/Section'
import { SectionTitle } from '../../ui/SectionTitle'
import { Container } from '../../ui/Container'
import { TableOption } from '../../ui/TableOption/TableOption'
import { tableData } from './tableData'
import { TableColumn } from '../../ui/TableColumn'

export const Table = ({ className }) => {
  const [selectedSchool, setSelectedSchool] = useState(['Saint Code'])

  return (
    <Section className={clsx(s.Table, className)}>
      <Container>
        <SectionTitle>
          <span className="transparent">
            Сравнение
          </span>
          {' '}
          школ
        </SectionTitle>
        <p className={clsx(s.Table__subtitle)}>
          Выбери школы которые хочешь сравнить с SaintCode Bootcamp
        </p>
        <div className={clsx(s.Table__options)}>
          {tableData
            .filter(elem => elem.id !== 0)
            .map(elem => (
              <TableOption
                key={elem.id}
                schoolName={elem.schoolName}
                selectedSchool={selectedSchool}
                setSelectedSchool={setSelectedSchool}
              />
            ))}
        </div>
        <div className={clsx(s.Table__row)}>
          <TableColumn
            className={s.first}
            schoolName="Школа"
            price="Цена за курс"
            hoursWithTeacher="Кол-во часов с преподавателем"
            practiceHours="Кол-во часов самостоятельной работы"
            programDuration="Сколько дней длиться программа"
            pricePerHour="Цена часа с преподавателем"
            programQuality="Качество программы (субъективно)"
            supportAfter="Какая поддержка после курса?"
            groupSize="Размер группы"
            hoursWithRecording="Кол-во часов с записанной теорией"
            additionalInfo="дополнительная информация"
            teacherSupportTime="время поддержки ментора"
          />
          {tableData
            .filter(elem => selectedSchool.includes(elem.schoolName))
            .map(({ ...elem }) => (
              <TableColumn
                key={elem.id}
                {...elem}
              />
            ))}
        </div>
      </Container>
    </Section>
  )
}
