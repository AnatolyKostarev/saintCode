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
import s from './IntreviewPolyakov.module.sass'

export const InterviewPolyakov = ({ className }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Section className={clsx(s.IntreviewPolyakov, className)}>
        <Container>
          <SectionTitle className={s.IntreviewPolyakov__title}>
            {t('Polyakov.title')}
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
              {t('Polyakov.description.item_1')}
            </p>
            <p>
              {t('Polyakov.description.item_2')}
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.IntreviewPolyakov__situation}>
            <p>
              {t('Polyakov.description.item_3')}
            </p>
          </AuthorSaid>
          <DecorLine className={s.IntreviewPolyakov__decorline} decorIcon={decorIcon} />
          <AuthorFooter
            avatar={iconFounder}
            alt="founder"
            width="80"
            height="80"
            authorName={t('Polyakov.authorName')}
            notice={t('Polyakov.notice')}
          />
        </Container>
      </Section>
      <Section className={s.IntreviewPolyakov__interview}>
        <Container className={s.IntreviewPolyakov__container}>
          <div className={s.IntreviewPolyakov__answers}>
            {interviewContent.map(item => (
              <InterviewPanel
                keyTranslate="Polyakov"
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
