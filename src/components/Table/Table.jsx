import React, { useState } from 'react'
import clsx from 'clsx'
import s from './Table.module.sass'
import { Section } from '../../ui/Section'
import { SectionTitle } from '../../ui/SectionTitle'
import { Container } from '../../ui/Container'
import { TableOption } from '../../ui/TableOption/TableOption'
import { tableData } from './tableData'
import { TableRow } from '../../ui/TableRow'
import { tableDataKeys } from './tableDataKeys'

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
            .filter(elem => elem.schoolName !== 'Saint Code')
            .map(elem => (
              <TableOption
                key={elem.id}
                schoolName={elem.schoolName}
                selectedSchool={selectedSchool}
                setSelectedSchool={setSelectedSchool}
              />
            ))}
        </div>
      </Container>
      <div className={clsx(s.Table__columns)}>
        {tableDataKeys.map(elem => (
          <TableRow
            key={elem.key}
            firstParam={elem.title}
          >
            {tableData
              .filter(e => selectedSchool.includes(e.schoolName))
              .map(e => (
                <div
                  key={e.id}
                  className={clsx(s.Table__cell)}
                >
                  <span
                    className={clsx(s.Table__text, { [s.school]: elem.key === 'schoolName' })}
                  >
                    {e[elem.key]}
                  </span>
                </div>
              ))}
          </TableRow>
        ))}
      </div>
    </Section>
  )
}
