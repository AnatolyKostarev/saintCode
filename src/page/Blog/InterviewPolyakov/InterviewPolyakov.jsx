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
import { InterviewPanel } from '../ui/InterviewPanel/InterviewPanel'
import { interviewContent } from './interviewContent'
import decorIcon from './icon-decoration.svg'
import iconFounder from './icon-founder.jpg'
import s from './IntreviewPolyakov.module.sass'

export const InterviewPolyakov = ({
  className,
}) => {
  return (
    <Layout>
      <Section className={clsx(s.IntreviewPolyakov, className)}>
        <Container>
          <SectionTitle className={s.IntreviewPolyakov__title}>
            Интервью с разработчиком Николаем Поляковым
          </SectionTitle>
          <BcgAttachment className={s.IntreviewPolyakov__developer}>
            {' '}
          </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.IntreviewPolyakov__begining}>
        <Container>
          <AuthorSaid className={s.IntreviewPolyakov__description}>
            <p>
              Николай Поляков, разрабатывает веб-сервисы на JavaScript-фреймворках React/Redux и TypeScript.
            </p>
            <p>
              В конце текста советы, с чего начать новичку.
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.IntreviewPolyakov__situation}>
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
      <Section className={s.IntreviewPolyakov__interview}>
        <Container className={s.IntreviewPolyakov__container}>
          <div className={s.IntreviewPolyakov__answers}>
            {interviewContent.map(item => (
              <InterviewPanel
                {...item}
                key={item.id}
              />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
