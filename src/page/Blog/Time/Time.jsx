import React from 'react'
import clsx from 'clsx'
import { Layout } from '../../../layout'
import { Section } from '../../../ui/Section'
import { Container } from '../../../ui/Container'
import { SectionTitle } from '../../../ui/SectionTitle'
import { BcgAttachment } from '../../../ui/BcgAttachment'
import time from './bcg-time.jpg'
import decoration from './icon-decoration.svg'
import avatar from './icon-Poddubny.png'
import s from './Time.module.sass'

export const Time = ({ className }) => {
  return (
    <Layout>
      <Section className={clsx(s.Time, className)}>
        <Container>
          <SectionTitle className={s.Time__title}>
            Беспощадное время
          </SectionTitle>
          <p className={s.Time__subtitle}>
            или пара слов о работе с датой и временем в программировании
          </p>
          <BcgAttachment className={s.Time__bcg} backgroundImage={time} />
        </Container>
      </Section>
      <Section className={s.Time__description}>
        <Container>
          <p className={s.Time__preface}>
            Возможно, прочитав название, вы подумали, что опять какой-то
            пенсионер-разработчик (Senior Developer) будет философствовать на
            тему того, как быстро летит время и что надо постоянно развиваться,
            чтобы оставаться на плаву, а чтобы двигаться вперёд, надо
            развиваться ещё больше. Всё это, безусловно, правда, но всё-таки
            хочется рассказать о практических проблемах в программировании, с
            которыми сталкиваются начинающие разработчики.
          </p>
          <div className={s.Time__decoration}>
            <img
              src={decoration}
              alt="line"
            />
          </div>
          <div className={s.Time__author}>
            <div className={s.Time__avatar}>
              <img
                src={avatar}
                alt="Poddubny"
                width="80"
                height="80"
              />
            </div>
            <div className={s.Time__info}>
              <p>Игорь Поддубный</p>
              <p>Автор статьи. Разработчик</p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
