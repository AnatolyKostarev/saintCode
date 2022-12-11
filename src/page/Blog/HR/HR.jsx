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
import rating from './img/image-rating.jpg'
import expiarence from './img/image-expiarence.jpg'
import salary from './img/image-salary.jpg'
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
          <DecorLine className={s.HR__decorline} decorIcon={decorIcon} />
          <AuthorFooter
            className={s.HR__footer}
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
          <BcgAttachment className={s.HR__origins_structure}>
            {' '}
          </BcgAttachment>
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
            Продолжим нагнетать картину, ещё одна проблема — «демографическая
            яма». Простыми словами — родилось слишком мало детей:
          </p>
          <BlogPanel
            className={s.HR__blog}
            background="#2a2533"
          >
            <p>
              Показатели рождаемости в России уже пережили своё минимальное
              значение, но они ещё окажут значительное воздействие на структуру
              российского человеческого капитала. Так, в 2027 году доля «молодых
              специалистов» — наиболее социально и экономически активного
              населения в возрасте 20−29 лет — снизится на 29% и составит 7,8
              млн чел. Это явление грозит ещё больше усугубить дефицит кадров в
              стране в течение 10 лет.
            </p>
          </BlogPanel>
          <p className={s.HR__position_how}>
            А как в мире дела?
          </p>
          <p className={s.HR__position_problem}>
            «Проблема характерна не только для России. В мире 45% работодателей
            не могут нанять специалиста нужной квалификации — их просто нет на
            рынке», указывают компания BCG, Союз «Молодых профессионалов» и
            «Росатом».
          </p>
        </Container>
      </Section>
      <Section className={s.HR__stuff}>
        <Container>
          <SectionTitle className={s.HR__stuff_title}>
            Какие программисты нужны больше всего?
          </SectionTitle>
          <p className={s.HR__stuff_subtitle}>
            Если кратко, то ТОП-1 — это ребята, которые создают веб-сайты.
            Открытых вакансий в этой области больше всего — javascript/react
            (фронтенд), php (бэкенд).
          </p>
          <div className={s.HR__stuff_rating}>
            <img
              src={rating}
              alt="rating"
              width="960"
              height="670"
            />
          </div>
          <div className={s.HR__stuff_text}>
            <p>
              Самый высокий темп роста числа вакансий наблюдается среди
              специалистов, которые работают с большими данными — python (data
              scientist).
            </p>
            <p>
              Больше всего вакансий, где ищут специалистов с опытом от 1 до 3
              лет.
            </p>
          </div>
          <div className={s.HR__stuff_expiarence}>
            <img
              src={expiarence}
              alt="expiarence"
              width="960"
              height="414"
            />
            <p>
              Ниже приведу интересные факты из исследования «Яндекса» и
              HeadHunter за 2018 год.
            </p>
          </div>
          <div className={s.HR__stuff_blogs}>
            <BlogPanel
              className={s.HR__blog}
              background="#161821"
            >
              <p>
                Больше всего IT-вакансий в Москве и Санкт-Петербурге — местные работодатели опубликовали 95 тысяч объявлений.
              </p>
            </BlogPanel>
            <BlogPanel
              className={s.HR__blog}
              background="#161821"
            >
              <p>
                Если взвесить количество IT-вакансий на размер местного рынка труда, самым «айтишным» российским городом окажется Новосибирск: в прошлом году на тысячу объявлений о работе здесь приходилось примерно 72 вакансии. Москва (69 на тысячу) и Петербург (60).
              </p>
            </BlogPanel>
            <BlogPanel
              className={s.HR__blog}
              background="#161821"
            >
              <p>
                Быстрее всего спрос на IT-специалистов растёт в Перми: по сравнению с 2016 годом доля ИТ-вакансий на местном рынке увеличилась на 15%, до 45 на тысячу. На втором месте по темпу роста — Москва, на третьем — Краснодар.
              </p>
            </BlogPanel>
            <BlogPanel
              className={s.HR__blog}
              background="#161821"
            >
              <p>
                Российских IT-специалистов нанимают не только отечественные, но и иностранные компании… требования к соискателям более высокие: на специалистов с опытом работы меньше года приходится только 3,5% таких вакансий, 24% — на тех, кто проработал в индустрии от года до трёх лет, основная же часть предложений адресована сотрудникам со стажем более четырёх лет.
              </p>
            </BlogPanel>
          </div>
        </Container>
      </Section>
      <Section className={s.HR__terms}>
        <Container>
          <SectionTitle className={s.HR__terms_title}>
            На каких условиях готовы принимать специалистов?
          </SectionTitle>
          <p className={s.HR__terms_subtitle}>
            В большинстве случаев это стандартная пятидневка в офисе.
          </p>
          <BlogPanel
            className={s.HR__blog}
            background="#161821"
          >
            <p>
              Гибкий график предлагался только в 8,5% объявлений, удалённая работа — в 9% («Яндекс» и HH, 2018).
            </p>
          </BlogPanel>
          <div className={s.HR__terms_salary}>
            <p>
              В первую очередь на удалённую работу могут рассчитывать специалисты с опытом от 4 лет. Если хочется удалёнку с небольшим опытом, то подойдут стартапы, фриланс или проектная работа в распределённых командах.
            </p>
            <img
              src={salary}
              alt="expiarence"
              width="960"
              height="670"
            />
          </div>
          <div className={s.HR__terms_description}>
            <p>
              По зарплатам большой разброс. По моему опыту, новички начинают с 20−25 тыс. руб. в большинстве случаев, либо перебиваются с проекта на проект.
            </p>
            <p>
              «Яндекс» в своём исследовании сообщает более высокие цифры (46 тыс. руб.). Думаю, что они брали в расчёт младшего специалиста (junior) в вакансиях на HH — уже поработал в рынке пару лет, просто на более простых проектах. Сделал сайт родственнику, натягивал вёрстку на Wordpress, что-то сделал для стартапов, большая часть его решений — через костыли. В хорошей компании будут готовы его подучить, но не объяснять базу.
            </p>
            <p>
              Есть исключения, когда вы в начале своего пути нашли хорошего наставника, который в сжатые сроки подготовил вас к работе с правильным заделом, но большинство же проходит более долгий путь.
            </p>
          </div>
        </Container>
      </Section>
      <Section className={s.HR__conclution}>
        <Container>
          <SectionTitle className={s.HR__conclution_title}>
            Итог
          </SectionTitle>
          <div className={s.HR__conclution_description}>
            <p>
              По зарплатам большой разброс. По моему опыту, новички начинают с 20−25 тыс. руб. в большинстве случаев, либо перебиваются с проекта на проект.
            </p>
            <p>
              «Яндекс» в своём исследовании сообщает более высокие цифры (46 тыс. руб.). Думаю, что они брали в расчёт младшего специалиста (junior) в вакансиях на HH — уже поработал в рынке пару лет, просто на более простых проектах. Сделал сайт родственнику, натягивал вёрстку на Wordpress, что-то сделал для стартапов, большая часть его решений — через костыли. В хорошей компании будут готовы его подучить, но не объяснять базу.
            </p>
            <p>
              Есть исключения, когда вы в начале своего пути нашли хорошего наставника, который в сжатые сроки подготовил вас к работе с правильным заделом, но большинство же проходит более долгий путь.
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
