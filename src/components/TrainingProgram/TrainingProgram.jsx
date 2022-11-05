import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { Panel } from '../../ui/Panel'
import { List } from '../../ui/List'
import {
  trainingWeb, trainingJS, trainingReact, trainingJob,
} from './trainingData'
import ThreeIcon from './icon-months.svg'
import s from './TrainingProgram.module.sass'

export const TrainingProgram = () => {
  return (
    <Section className={s.TrainingProgram}>
      <Container>
        <div className={s.TrainingProgram__header}>
          <SectionTitle>
            <span>
              Программа обучения
            </span>
            <br />
            на веб-разработчика (frontend)
          </SectionTitle>
          <div>
            <img src={ThreeIcon} alt="three" width="281" height="187" />
            <p>
              насыщенных
              {' '}
              <br />
              {' '}
              месяца учебы
            </p>
          </div>
        </div>
        <div className={s.TrainingProgram__title}>
          <p>
            Научишься верстать статические веб-страницы за 3 недели
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
            text="Итог"
            description="Свёрстан лендинг и сервис заказа пиццы"
          />
        </div>
        <div className={s.TrainingProgram__title}>
          <p>
            Научишься создавать динамические веб-страницы за 5 недель на JavaScript
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
            text="Итог"
            description="Работающий сервис по заказу пиццы"
          />
        </div>
        <div className={s.TrainingProgram__title}>
          <p>
            Научишься использовать React для создания современных веб-приложений за 4 недели
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
            text="Итог"
            description="Перепишешь сервис по заказу пиццы на React"
          />
        </div>
        <div className={s.TrainingProgram__title}>
          <p>
            Подготовишься к поиску работы
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
            text="Итог"
            description="Разослал качественные резюме и сопроводительные письма в адекватные компании. Готов проходить техническое собеседование"
          />
        </div>
      </Container>
    </Section>
  )
}
