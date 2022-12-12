import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { Panel } from '../../ui/Panel'
import { List } from '../../ui/List'
import {
  trainingWeb,
  trainingJS,
  trainingReact,
  trainingJob,
} from './trainingData'
import ThreeIcon from './icon-months.svg'
import s from './TrainingProgram.module.sass'

export const TrainingProgram = () => {
  const { t } = useTranslation()
  
  return (
    <Section className={s.TrainingProgram}>
      <Container className={s.container}>
        <div className={s.TrainingProgram__header}>
          <SectionTitle className={s.TrainingProgram__header_title}>
            <span>
              {t('TrainingProgram.title_span')}
            </span>
            <br />
            {t('TrainingProgram.title')}
          </SectionTitle>
          <div>
            <img
              src={ThreeIcon}
              alt="three"
              width="281"
              height="206"
            />
            <p>
              {t('TrainingProgram.subtitle_one')}
              {' '}
              {t('TrainingProgram.subtitle_two')}
            </p>
          </div>
        </div>
        <div className={s.border}>
          <div className={s.TrainingProgram__title}>
            <p>
              {t('TrainingProgram.task.one.title')}
            </p>
            <p>
              01
            </p>
          </div>
          <div className={s.TrainingProgram__tasks}>
            <div className={s.TrainingProgram__wrapper}>
              <List items={trainingWeb} />
            </div>
            <Panel
              className={s.TrainingProgram__panel}
              text={t('TrainingProgram.total')}
              description={t('TrainingProgram.task.one.description')}
            />
          </div>
          <div className={s.TrainingProgram__title}>
            <p>
              {t('TrainingProgram.task.two.title')}
            </p>
            <p>
              02
            </p>
          </div>
          <div className={s.TrainingProgram__tasks}>
            <div className={s.TrainingProgram__wrapper}>
              <List items={trainingJS} />
            </div>
            <Panel
              className={s.TrainingProgram__panel}
              text={t('TrainingProgram.total')}
              description={t('TrainingProgram.task.two.description')}
            />
          </div>
          <div className={s.TrainingProgram__title}>
            <p>
              {t('TrainingProgram.task.three.title')}
            </p>
            <p>
              03
            </p>
          </div>
          <div className={s.TrainingProgram__tasks}>
            <div className={s.TrainingProgram__wrapper}>
              <List items={trainingReact} />
            </div>
            <Panel
              className={s.TrainingProgram__panel}
              text={t('TrainingProgram.total')}
              description={t('TrainingProgram.task.three.description')}
            />
          </div>
          <div className={s.TrainingProgram__title}>
            <p>
              {t('TrainingProgram.task.four.title')}
            </p>
            <p>
              04
            </p>
          </div>
          <div className={s.TrainingProgram__tasks}>
            <div className={s.TrainingProgram__wrapper}>
              <List items={trainingJob} />
            </div>
            <Panel
              className={s.TrainingProgram__panel}
              text={t('TrainingProgram.total')}
              description={t('TrainingProgram.task.four.description')}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
