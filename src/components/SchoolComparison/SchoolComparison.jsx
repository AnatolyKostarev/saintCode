import React, { useState } from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import Button from '../../ui/Button/Button'
import iconTables from './icon-tables.svg'
import s from './SchoolComparison.module.sass'

export const SchoolComparison = () => {
  const [isTable, showIsTable] = useState(false)

  const toggleTable = () => {
    showIsTable(!isTable)
  }

  return (
    <>
      <Section className={s.schools__comparison}>
        <Container className={s.container}>
          <div>
            <SectionTitle>
              <span>
                Сравнение
              </span>
              &nbsp;школ
            </SectionTitle>
            <p className={s.description}>
              Мы подготовили для Вас подробную сравнительную таблицу, где
              представлены все крупные школы по программированию в сравнении с
              нашей
            </p>
            <Button
              className={s.schools__btn}
              onClick={toggleTable}
              text="Посмотреть сравнительную таблицу"
            />
          </div>
          <div>
            <img src={iconTables} alt="tables" />
          </div>
        </Container>
        <p
          className={s.p}
          style={
            isTable
              ? {
                transform: 'translateY(0%)',
                transition: '0.3s',
                visibility: 'visible',
              }
              : {
                transform: 'translateY(-110%)',
                transition: '0.3s',
                visibility: 'hidden',
                opacity: 0,
              }
          }
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          obcaecati corrupti amet repudiandae eveniet culpa praesentium rem
          tempora! Reprehenderit nostrum voluptatum amet alias esse, sequi
          dolorem voluptate a distinctio tempore.
        </p>
      </Section>
    </>
  )
}
