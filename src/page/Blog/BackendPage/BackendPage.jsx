import React, { useState } from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import { AuthorSaid } from '../ui/AuthorSaid/AuthorSaid'
import { BcgAttachment } from '../../../ui/BcgAttachment'
import { BlogPanel } from '../ui/BlogPanel/BlogPanel'
import { TimingItem } from '../ui/TimingItem/TimingItem'
import { SchoolItem } from '../../../ui/SchoolItem'
import { TrainingItem } from '../ui/TrainingItem/TrainingItem'
import { timing } from './backendTiming'
import { coverLetterContent, briefContent } from './trainingMaterials'
import play from './icon-play.svg'
import s from './BackendPage.module.sass'

export const BackendPage = ({ className }) => {
  const [coverLetter, setCoverLetter] = useState(false)
  const [brief, setBrief] = useState(false)

  const coverLetterToggle = () => {
    setCoverLetter(!coverLetter)
  }

  const briefToggle = () => {
    setBrief(!brief)
  }

  return (
    <Layout>
      <Section className={clsx(s.backendInterview, className)}>
        <Container>
          <SectionTitle className={s.backendInterview__title}>
            Тренинг собеседования Junior Backend Developer
          </SectionTitle>
          <BcgAttachment className={s.backendInterview__keyboard}>
            <button
              type="button"
              onClick={() => console.log('click')}
            >
              <img
                className={s.backendInterview__playIcon}
                src={play}
                alt=""
                width="120"
                height="120"
              />
            </button>
          </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.backendInterview__begining}>
        <Container>
          <AuthorSaid className={s.backendInterview__description}>
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
          <AuthorSaid className={s.backendInterview__situation}>
            <p>
              Описание ситуации для проведения тренинга
            </p>
            <p>
              Начинающий разработчик проходит собеседование с техническим
              директором на вакансию Junior Backend Developer.
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.backendInterview__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              Собеседование проходит: Александр Чистяков
            </p>
            <p>
              Интервьюирует: Николай Пушкин
            </p>
            <p>
              Интервьюирует: Евгений Гриценко
            </p>
          </BlogPanel>
          <AuthorSaid className={s.backendInterview__timing}>
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
      <Section className={s.backendInterview__training}>
        <Container>
          <SectionTitle className={s.backendInterview__training_title}>
            Материалы для тренинга
          </SectionTitle>
          <div className={s.backendInterview__training_items}>
            <SchoolItem
              className={s.backendInterview__letter}
              title="Сопроводительное письмо"
              id={1}
              onClick={coverLetterToggle}
              show={coverLetter}
            >
              <TrainingItem show={coverLetter}>
                { coverLetterContent }
              </TrainingItem>
            </SchoolItem>
            <SchoolItem
              className={s.backendInterview__letter}
              title="Резюме соискателя"
              id={1}
              onClick={briefToggle}
              show={brief}
            >
              <TrainingItem show={brief}>
                { briefContent }
              </TrainingItem>
            </SchoolItem>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
