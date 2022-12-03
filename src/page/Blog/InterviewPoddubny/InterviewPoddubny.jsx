import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import { BcgAttachment } from '../../../ui/BcgAttachment'
import { AuthorSaid } from '../ui/AuthorSaid/AuthorSaid'
import { DecorLine } from '../ui/DecorLine/DecorLine'
import { AuthorFooter } from '../ui/AuthorFooter/AuthorFooter'
import decorIcon from './icon-decoration.svg'
import iconFounder from './icon-founder.jpg'
import s from './InterviewPoddubny.module.sass'

export const InterviewPoddubny = ({
  className,
}) => {
  return (
    <Layout>
      <Section className={clsx(s.InterviewPoddubny, className)}>
        <Container>
          <SectionTitle className={s.InterviewPoddubny__title}>
            Интервью с разработчиком Игорем Поддубным
          </SectionTitle>
          <BcgAttachment className={s.InterviewPoddubny__laptop}>
            {' '}
          </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.InterviewPoddubny__begining}>
        <Container>
          <AuthorSaid className={s.InterviewPoddubny__description}>
            <p>
              Игорь работает в международной IT-компании, разрабатывает приложения под Windows и Web, переехал из Санкт-Петербурга в Прагу, где сейчас живёт и работает.
            </p>
            <p>
              В конце текста советы, с чего начать новичку.
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.InterviewPoddubny__situation}>
            <p>
              Я буду выкладывать интервью с разработчиками, в которых ребята расскажут, как они стартовали, через сколько стали зарабатывать нормальные деньги и с чего лучше начинать новичку.
            </p>
          </AuthorSaid>
          <DecorLine decorIcon={decorIcon} />
          <AuthorFooter
            avatar={iconFounder}
            alt="founder"
            width="80"
            height="80"
            authorName="Евгений Гриценко"
            notice="Основатель SaintCode Bootcamp"
          />
        </Container>
      </Section>
    </Layout>
  )
}
