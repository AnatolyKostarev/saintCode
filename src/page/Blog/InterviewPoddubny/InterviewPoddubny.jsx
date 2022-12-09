import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
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
import s from './InterviewPoddubny.module.sass'

export const InterviewPoddubny = ({ className }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Section className={clsx(s.InterviewPoddubny, className)}>
        <Container>
          <SectionTitle className={s.InterviewPoddubny__title}>
            {t('Poddubny.title')}
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
              {t('Poddubny.description.item_1')}
            </p>
            <p>
              {t('Poddubny.description.item_2')}
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.InterviewPoddubny__situation}>
            <p>
              {t('Poddubny.description.item_3')}
            </p>
          </AuthorSaid>
          <DecorLine className={s.InterviewPoddubny__decorline} decorIcon={decorIcon} />
          <AuthorFooter
            className={s.InterviewPoddubny__footer}
            avatar={iconFounder}
            alt="founder"
            width="80"
            height="80"
            authorName={t('Poddubny.authorName')}
            notice={t('Poddubny.notice')}
          />
        </Container>
      </Section>
      <Section className={s.InterviewPoddubny__interview}>
        <Container className={s.InterviewPoddubny__container}>
          <div className={s.InterviewPoddubny__answers}>
            {interviewContent.map(item => (
              <InterviewPanel
                className={s.InterviewPoddubny__panel}
                keyTranslate="Poddubny"
                {...item}
                key={item.id}
              />
            ))}
          </div>
          <p className={s.InterviewPoddubny__post}>
            P.S. Если интересна та же область программирования, можно задать
            вопросы
            {' '}
            <a href="https://vk.com/ipodd">
              лично
            </a>
            {' '}
            Игорю.
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
