import React, { useState } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import { BcgAttachment } from '../../../ui/BcgAttachment'
import { AuthorSaid } from '../ui/AuthorSaid/AuthorSaid'
import { BlogPanel } from '../ui/BlogPanel/BlogPanel'
import { TimingItem } from '../ui/TimingItem/TimingItem'
import { SchoolItem } from '../../../ui/SchoolItem'
import { timing } from './frontendTiming'
import { vacancyContent, coverLetterContent, briefContent } from './trainingMaterials'
import play from './icon-play.svg'
import s from './FrontendPage.module.sass'
import { TrainingItem } from '../ui/TrainingItem/TrainingItem'

export const FrontendPage = ({ className }) => {
  const [vacancy, setVacancy] = useState(false)
  const [coverLetter, setCoverLetter] = useState(false)
  const [brief, setBrief] = useState(false)

  const vacancyToggle = () => {
    setVacancy(!vacancy)
  }

  const coverLetterToggle = () => {
    setCoverLetter(!coverLetter)
  }

  const briefToggle = () => {
    setBrief(!brief)
  }

  const { t } = useTranslation()

  return (
    <Layout>
      <Section className={clsx(s.frontendInterview, className)}>
        <Container>
          <SectionTitle className={s.frontendInterview__title}>
            Тренинг собеседования Junior Frontend Developer
          </SectionTitle>
          <BcgAttachment className={s.frontendInterview__laptop}>
            <button
              type="button"
              onClick={() => console.log('click')}
            >
              <img
                className={s.frontendInterview__playIcon}
                src={play}
                alt=""
                width="120"
                height="120"
              />
            </button>
          </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.frontendInterview__begining}>
        <Container>
          <AuthorSaid className={s.frontendInterview__description}>
            <p>
              Тренинг собеседования с техническим директором. Запись с занятий
              по трудоустройству для начинающих веб-разработчиков в SaintCode
              Bootcamp.
            </p>
            <p>
              Тайм-коды с вопросами к соискателю ниже в описании. Материалы
              (текст вакансии, резюме и сопроводительное письмо от соискателя)
              также ниже под видео.
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.frontendInterview__situation}>
            <p>
              Описание ситуации для проведения тренинга
            </p>
            <p>
              Начинающий разработчик проходит собеседование с техническим
              директором на вакансию Junior Backend Developer.
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.frontendInterview__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              Собеседование проходит: Евгений Галимов
            </p>
            <p>
              Интервьюирует: Глеб Свечников
            </p>
            <p>
              Модератор: Евгений Гриценко
            </p>
          </BlogPanel>
          <AuthorSaid className={s.frontendInterview__timing}>
            <p>
              Тайм-коды:
            </p>
            {timing.map(item => (
              <TimingItem
                {...item}
                key={item.id}
              />
            ))}
          </AuthorSaid>
        </Container>
      </Section>
      <Section className={s.frontendInterview__training}>
        <Container>
          <SectionTitle className={s.frontendInterview__training_title}>
            Материалы для тренинга
          </SectionTitle>
          <div className={s.frontendInterview__training_items}>
            <SchoolItem
              className={s.frontendInterview__letter}
              title="Текст вакансии"
              id={1}
              onClick={vacancyToggle}
              show={vacancy}
            >
              <TrainingItem show={vacancy}>
                {vacancyContent}
              </TrainingItem>
            </SchoolItem>
            <SchoolItem
              className={s.frontendInterview__letter}
              title="Сопроводительное письмо"
              id={1}
              onClick={coverLetterToggle}
              show={coverLetter}
            >
              <TrainingItem show={coverLetter}>
                {coverLetterContent}
              </TrainingItem>
            </SchoolItem>
            <SchoolItem
              className={s.frontendInterview__letter}
              title="Резюме соискателя"
              id={1}
              onClick={briefToggle}
              show={brief}
            >
              <TrainingItem show={brief}>
                {briefContent}
              </TrainingItem>
            </SchoolItem>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
