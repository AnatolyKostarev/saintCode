import React from 'react'
import clsx from 'clsx'
import s from './Results.module.sass'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import ResultsArticle from '../../ui/ResultsArticle/ResultsArticle'
import group from './group.svg'
import minded from './minded.svg'
import neuron from './neuron.svg'
import programm from './programm.svg'
import teacher from './teacher.svg'

const Results = ({ className }) => {
  return (
    <Section className={clsx(s.Results, className)}>
      <Container className={s.Results__container}>
        <div className={s.left}>
          <SectionTitle>
            Что ты получишь
            {' '}
            <span className="transparent--blue">
              в&nbsp;нашем буткемпе?
            </span>
          </SectionTitle>
        </div>
        <div className={s.right}>
          <ResultsArticle
            icon={group}
            subtitle="Маленькую группу (6-12 человек)"
            text="Где преподаватель может уделить внимание каждому. Если студент на чём-то застревает — с ним
            занимаются отдельно. Если знает больше остальных — ему дают продвинутые задания"
          />
          <ResultsArticle
            icon={teacher}
            subtitle="Преподавателя"
            text="Который реально заботится о том, что ты освоишь программу.
            Наши наставники часто созваниваются со студентами по вечерам или выходным,
            хотя это не входит в их обязанности"
          />
          <ResultsArticle
            icon={neuron}
            subtitle="Связи"
            text="Сокурсники, наставники и приглашённые эксперты станут частью твоих деловых знакомств,
            которые помогут найти работу"
          />
          <ResultsArticle
            icon={minded}
            subtitle="Единомышленников"
            text="Потому что легче достигать целей в группе"
          />
          <ResultsArticle
            className={s.end}
            icon={programm}
            subtitle="Программу"
            text="На основе десятилетнего опыта ведущих буткемпов мира"
          />
        </div>
      </Container>
    </Section>
  )
}

export default Results
