import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import { BcgAttachment } from '../../../ui/BcgAttachment'
import { AuthorSaid } from '../ui/AuthorSaid/AuthorSaid'
import { DecorLine } from '../ui/DecorLine/DecorLine'
import { AuthorFooter } from '../ui/AuthorFooter/AuthorFooter'
import { BlogPanel } from '../ui/BlogPanel/BlogPanel'
import time from './bcg-time.jpg'
import decoration from './icon-decoration.svg'
import avatar from './icon-Poddubny.png'
import s from './Time.module.sass'

export const Time = ({ className }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Section className={clsx(s.Time, className)}>
        <Container>
          <SectionTitle className={s.Time__title}>
            {t('Time.title')}
          </SectionTitle>
          <p className={s.Time__subtitle}>
            {t('Time.subtitle')}
          </p>
          <BcgAttachment className={s.Time__bcg_time} img={time} />
        </Container>
      </Section>
      <Section className={s.Time__begining}>
        <Container>
          <AuthorSaid className={s.Time__opinion}>
            <p>
              {t('Time.opinion')}
            </p>
          </AuthorSaid>
          <DecorLine
            className={s.Time__decoration}
            decorIcon={decoration}
          />
          <AuthorFooter
            className={s.Time__authorfooter}
            avatar={avatar}
            alt="Poddubny"
            width="80"
            height="80"
            authorName={t('Time.authorName')}
            notice={t('Time.notice')}
          />
        </Container>
      </Section>
      <Section className={s.Time__middle}>
        <Container>
          <AuthorSaid className={s.Time__message}>
            <p>
              {t('Time.message.item_1')}
            </p>
            <p>
              {t('Time.message.item_2')}
            </p>
            <p>
              {t('Time.message.item_3')}
            </p>
            <p>
              {t('Time.message.item_4')}
            </p>
            <p>
              {t('Time.message.item_5')}
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.Time__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              {t('Time.code.item_1')}
              {' '}
              &ge; 60
            </p>
            <p>
              {t('Time.code.item_2')}
              {' '}
            </p>
            <p>
              {t('Time.code.item_3')}
            </p>
            <p>
              (&quot;%&quot; –
              {' '}
              {t('Time.code.item_4')}
              )
            </p>
          </BlogPanel>
          <AuthorSaid className={s.Time__message}>
            <p>
              {t('Time.message.item_6')}
            </p>
            <p>
              {t('Time.message.item_7')}
            </p>
            <p>
              {t('Time.message.item_8')}
            </p>
            <p>
              {t('Time.message.item_9')}
            </p>
            <p>
              {t('Time.message.item_10')}
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.Time__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              {t('Time.code.item_5')}
            </p>
            <p>
              {t('Time.code.item_6')}
            </p>
            <p>
              (&quot;==&quot; –
              {' '}
              {t('Time.code.item_7')}
              {' '}
              &quot;=&quot; –
              {' '}
              {t('Time.code.item_8')}
              ).
            </p>
          </BlogPanel>
          <AuthorSaid className={s.Time__message}>
            <p>
              {t('Time.message.item_11')}
            </p>
          </AuthorSaid>
          <BcgAttachment className={s.Time__bcg_clock} />
        </Container>
      </Section>
      <Section className={s.Time__conclusion}>
        <Container>
          <AuthorSaid className={s.Time__message_last}>
            <p>
              {t('Time.message.item_12')}
            </p>
            <p>
              {t('Time.message.item_13')}
            </p>
            <p>
              {t('Time.message.item_14')}
            </p>
            <p>
              {t('Time.message.item_15')}
            </p>
            <p>
              {t('Time.message.item_16')}
              {' '}
              JavaScript:
              moment().add(10, &apos;years&apos;); в C#:
              DateTime.Now.AddYears(10).
            </p>
            <p>
              {t('Time.message.item_17')}
            </p>
          </AuthorSaid>
          <DecorLine
            className={s.Time__decoration}
            decorIcon={decoration}
          />
          <AuthorFooter
            className={s.Time__authFooter}
            avatar={avatar}
            alt="Poddubny"
            width="80"
            height="80"
            authorName={t('Time.authorName')}
            notice={t('Time.notice')}
          />
        </Container>
      </Section>
    </Layout>
  )
}
