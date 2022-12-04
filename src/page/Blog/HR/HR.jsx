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
import { BlogPanel } from '../ui/BlogPanel/BlogPanel'
import { origins } from './hrData'
import decorIcon from './img/icon-decoration.svg'
import iconFounder from './img/icon-founder.jpg'
import growth from './img/image-increament.jpg'
import s from './HR.module.sass'

export const HR = ({ className }) => {
  return (
    <Layout>
      <Section className={clsx(s.HR, className)}>
        <Container>
          <SectionTitle className={s.HR__title}>
            Кадровый голод в России на IT-специалистов
          </SectionTitle>
          <BcgAttachment className={s.HR__candidate}> </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.HR__begining}>
        <Container>
          <AuthorSaid className={s.HR__description}>
            <p>
              Как возник, какие проблемы, на кого стоит учиться, на какие
              условия работы стоит рассчитывать?
            </p>
          </AuthorSaid>
          <AuthorSaid className={s.HR__situation}>
            <p>
              То тут, то там мы слышим, что не хватает программистов. Кадров не
              хватает даже в условиях, когда таким специалистам готовы платить в
              3-5 раз больше, чем в среднем по стране.
            </p>
            <p>
              Когда я сел писать эту статью, думал за пару дней справлюсь, но
              всё оказалось несколько сложнее. В процессе разбора проблемы мне
              пришло несколько инсайтов «Так вот оно как!». Хотя вначале я не
              особо ждал сюрпризов, так как кручусь в отрасли последние 5 лет.
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
      <Section className={s.HR__origins}>
        <Container className={s.HR__container}>
          <SectionTitle className={s.HR__origins_title}>
            Истоки
          </SectionTitle>
          <div className={s.HR__origins_article}>
            {origins.map(paragraph => (
              <p>
                {paragraph}
              </p>
            ))}
          </div>
          <BcgAttachment className={s.HR__origins_structure}> </BcgAttachment>
        </Container>
      </Section>
      <Section className={s.HR__position}>
        <Container>
          <p className={s.HR__position_preface}>
            Также можно подробнее прочитать об&nbsp;этом в&nbsp;
            <a href="https://www.hse.ru/data/2019/04/12/1178004671/2%20%D0%A6%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0.pdf">
              исследовании
            </a>
            {' '}
            Высшей Школы Экономики «Что такое цифровая экономика?»
          </p>
          <SectionTitle className={s.HR__position_title}>
            Ситуация в России сегодня
          </SectionTitle>
          <p className={s.HR__position_quontity}>
            Теперь надо понять, сколько нужно программистов. В исследовании
            Фонда Развития Интернет-Инициатив (ФРИИ) говорится:
          </p>
          <BlogPanel
            className={s.HR__blog}
            background="#2a2533"
          >
            <p>
              …для успешной реализации базовых технологий «цифровой экономики»
              доля IT-специалистов от всего занятого населения в России должна
              сравняться с аналогичными показателями других стран. Средний для
              стран лидеров (США, Германия, Великобритания) показатель
              составляет 4,3%. Для достижения такой доли, в России за 10 лет
              должно появиться дополнительно 2,05 млн IT-специалистов.
            </p>
          </BlogPanel>
          <div className={s.HR__position_statement}>
            <p>
              В том же отчёте сообщается, что сейчас система образования
              производит 60 тыс. специалистов в год, когда потребности рынка
              составляют 186 тыс. Забавно, что цифры разошлись с предыдущим
              заявлением: так, 10 лет и 2,05 млн специалистов — получается 205
              тыс. в год. Но пусть будет на совести аналитиков фонда, в любом
              случае это примерные оценки.
            </p>
            <p>
              Усугубляет проблему качество образования этих 60 тыс.
              специалистов, широкие теоретические познания, но критически мало
              практики, сообщается в том же отчёте.
            </p>
          </div>
          <div className={s.HR__position_growth}>
            <img
              src={growth}
              alt=""
              width="960"
              height="auto"
            />
          </div>
          <p className={s.HR__position_quontity}>
            Продолжим нагнетать картину, ещё одна проблема — «демографическая яма». Простыми словами — родилось слишком мало детей:
          </p>
          <BlogPanel
            className={s.HR__blog}
            background="#2a2533"
          >
            <p>
              Показатели рождаемости в России уже пережили своё минимальное значение, но они ещё окажут значительное воздействие на структуру российского человеческого капитала. Так, в 2027 году доля «молодых специалистов» — наиболее социально и экономически активного населения в возрасте 20−29 лет — снизится на 29% и составит 7,8 млн чел. Это явление грозит ещё больше усугубить дефицит кадров в стране в течение 10 лет.
            </p>
          </BlogPanel>
          <p className={s.HR__position_how}>
            А как в мире дела?
          </p>
          <p className={s.HR__position_problem}>
            «Проблема характерна не только для России. В мире 45% работодателей не могут нанять специалиста нужной квалификации — их просто нет на рынке», указывают компания BCG, Союз «Молодых профессионалов» и «Росатом».
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
