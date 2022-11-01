import React, { useState } from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { SchoolItem } from '../../ui/SchoolItem'
import { SchoolItemsProject } from '../../ui/SchoolItemsContent/SchoolItemsProject'
import { SchoolBeginner } from '../../ui/SchoolItemsContent/SchoolBeginner'
import { SchoolItemStuding } from '../../ui/SchoolItemsContent/SchoolItemStuding'
import s from './SchoolInfo.module.sass'

export const SchoolInfo = () => {
  const [isProject, setIsProject] = useState(true)
  const [isBeginner, setIsBeginner] = useState(true)
  const [isHow, setIsHow] = useState(true)

  const isProjectSwitcher = () => {
    setIsProject(!isProject)
  }

  const isBeginnerSwitcher = () => {
    setIsBeginner(!isBeginner)
  }

  const isHowSwitcher = () => {
    setIsHow(!isHow)
  }

  return (

    <Section className={s.school}>
      <Container>
        <SectionTitle className={s.school__title}>
          О Школе
        </SectionTitle>
        <div className={s.school__items}>
          <SchoolItem
            title="Как мы создали проект?"
            id={1}
            onClick={isProjectSwitcher}
            show={isProject}
          >
            <SchoolItemsProject show={isProject} />
          </SchoolItem>
          <SchoolItem
            title="Какие проблемы поджидают новичка?"
            id={2}
            onClick={isBeginnerSwitcher}
            show={isBeginner}
          >
            <SchoolBeginner show={isBeginner} />
          </SchoolItem>
          <SchoolItem
            title="Как и почему мы учим программированию?"
            id={3}
            onClick={isHowSwitcher}
            show={isHow}
          >
            <SchoolItemStuding show={isHow} />
          </SchoolItem>
        </div>
      </Container>
    </Section>
    
  )
}
