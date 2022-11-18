import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { SchoolItem } from '../../ui/SchoolItem'
import { SchoolItemsProject } from '../../ui/SchoolItemsContent/SchoolItemsProject'
import { SchoolBeginner } from '../../ui/SchoolItemsContent/SchoolBeginner'
import { SchoolItemStuding } from '../../ui/SchoolItemsContent/SchoolItemStuding'
import s from './SchoolInfo.module.sass'

export const SchoolInfo = () => {
  const [isProject, setIsProject] = useState(false)
  const [isBeginner, setIsBeginner] = useState(false)
  const [isHow, setIsHow] = useState(false)
  const { t } = useTranslation()

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
          {t('SchoolInfo.title')}
        </SectionTitle>
        <div className={s.school__items}>
          <SchoolItem
            title={t('SchoolInfo.project')}
            id={1}
            onClick={isProjectSwitcher}
            show={isProject}
          >
            <SchoolItemsProject show={isProject} />
          </SchoolItem>
          <SchoolItem
            title={t('SchoolInfo.problem')}
            id={2}
            onClick={isBeginnerSwitcher}
            show={isBeginner}
          >
            <SchoolBeginner show={isBeginner} />
          </SchoolItem>
          <SchoolItem
            title={t('SchoolInfo.web')}
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
