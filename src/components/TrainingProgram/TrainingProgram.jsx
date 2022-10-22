import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
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
        <div className={s.TrainingProgram__tasks}>
          <div>
            <h3>
              Научишься верстать статические веб-страницы за 3 недели
            </h3>
            <span>
              01
            </span>
          </div>
          <div className={s.TrainingProgram__wrapper}>
            <div className={s.TrainingProgram__task}>
              <p>
                &bull; Git
              </p>
              <ul>
                <li>
                  Terminal
                </li>
                <li>
                  Поймёшь, как работать в команде
                  {' '}
                </li>
                <li>
                  {' '}
                  Будешь писать понятные комментарии к своему коду
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </Container>
    </Section>
  )
}
