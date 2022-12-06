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
            Беспощадное время
          </SectionTitle>
          <p className={s.Time__subtitle}>
            или пара слов о работе с датой и временем в программировании
          </p>
          <BcgAttachment className={s.Time__bcg_time} img={time} />
        </Container>
      </Section>
      <Section className={s.Time__begining}>
        <Container>
          <AuthorSaid className={s.Time__opinion}>
            <p>
              Возможно, прочитав название, вы подумали, что опять какой-то
              пенсионер-разработчик (Senior Developer) будет философствовать на
              тему того, как быстро летит время и что надо постоянно
              развиваться, чтобы оставаться на плаву, а чтобы двигаться вперёд,
              надо развиваться ещё больше. Всё это, безусловно, правда, но
              всё-таки хочется рассказать о практических проблемах в
              программировании, с которыми сталкиваются начинающие разработчики.
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
            authorName="Игорь Поддубный"
            notice="Автор статьи. Разработчик"
          />
        </Container>
      </Section>
      <Section className={s.Time__middle}>
        <Container>
          <AuthorSaid className={s.Time__message}>
            <p>
              Особенностям работы с датой и временем уделяют совсем мало
              внимания, полагая, что это и так очевидно или что в наше время
              существует масса готовых инструментов для удобной работы.
            </p>
            <p>
              Да, в универе рассказывают про 1 января 1970 года, с которого
              берёт начало Unix-время, UTC и даже немного упоминают про
              форматирование. Однако о некоторых вещах не говорят. Приведу пару
              примеров из собственного опыта.
            </p>
            <p>
              Несколько лет назад я модерировал конкурс для разработчиков
              приложений под Windows Phone 7, устроенный компанией Microsoft в
              моём универе. Тогда эта платформа только вышла и вселяла надежды.
              Участниками были студенты первых курсов, и поэтому встречались
              совсем «сырые» приложения.
            </p>
            <p>
              Один паренёк написал что-то вроде простенькой напоминалки:
              пользователь с помощью кнопочек «+/-» задаёт, через сколько минут
              должен сработать будильник, и нажимает «Старт». Он выставил
              напоминание через 1 минуту и очень порадовался, когда будильник
              сработал. Первое, что мне пришло в голову сделать, — это выставить
              не 1 минуту, а, например, 60, чтобы проверить, что будильник
              сработает через час.
            </p>
            <p>
              Паренёк сразу понял, что его код не сработает, так как он просто
              прибавляет минуты: если времени было 11:20, то будильник будет (не
              будет) установлен на 11:80. Он быстро поправил код, добавив
              условие:
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.Time__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              Если минуты &ge; 60
            </p>
            <p>
              минуты = минуты % 60
              {' '}
            </p>
            <p>
              часы = часы + 1
            </p>
            <p>
              (&quot;%&quot; – операция получения остатка от деления)
            </p>
          </BlogPanel>
          <AuthorSaid className={s.Time__message}>
            <p>
              Естественно, следующий мой вопрос был про 23:20. Его код теперь
              пытался установить будильник на 24:20.
            </p>
            <p>
              Ну что поделать. Парень делал свои первые шаги в программировании,
              ему простительно. Но и опытные программисты иногда сталкиваются с
              подобными ошибками.
            </p>
            <p>
              Когда я был программистом среднего звена (Middle), мне на работе
              нужно было сделать генератор сертификатов. А сертификат — это
              такая штука, у которой есть дата окончания действия. Раньше для
              генерации мы использовали какую-то тулу (программу), которая
              принимала на вход количество дней, которое сертификат будет
              действовать от текущей даты. Мы просто задавали 3650 (то есть 10
              лет без учёта високосных) и всё.
            </p>
            <p>
              Но теперь в нашем собственном коде на C++ дату истечения надо было
              задавать жёстко. Нетрудно было понять, что прибавлять к дням 3650
              нельзя: такого дня нет ни в одном месяце. Тогда я просто прибавил
              к годам 10 и готово. Проверил: работает. Тестировщики тоже не
              жаловались. И с этим кодом мы успешно выпустили продукт.
            </p>
            <p>
              Рано утром 29 февраля 2016 года мне написали тестировщики —
              почему-то не работает генерация сертификата, а следом за ней и
              остальной наш продукт. Я полез в код, и с меня сошло несколько
              холодных потов. В этот день наш продукт пытался генерировать
              сертификаты до 29 февраля 2026 года и ему это не удавалось, потому
              что такой даты не существует. Кто-то из вас, наверное, подумает,
              что решение элементарное:
            </p>
          </AuthorSaid>
          <BlogPanel
            className={s.Time__code}
            background="rgba(22, 24, 33, 1)"
          >
            <p>
              Если (месяц == февраль) и (число == 29)
            </p>
            <p>
              число = 28
            </p>
            <p>
              (&quot;==&quot; – операция сравнения, а &quot;=&quot; – операция
              присвоения).
            </p>
          </BlogPanel>
          <AuthorSaid className={s.Time__message}>
            <p>
              Да, в данном случае это сработает, но это «костыль» (обход
              проблемы путём добавления ненужных условий). Это решение одной
              текущей проблемы, но останутся другие подводные камни.
            </p>
          </AuthorSaid>
          <BcgAttachment className={s.Time__bcg_clock} />
        </Container>
      </Section>
      <Section className={s.Time__conclusion}>
        <Container>
          <AuthorSaid className={s.Time__message_last}>
            <p>
              Например, вы помните, что во многих странах два раза в год
              переводят часы: в конце октября на час назад, а в конце марта на
              час вперёд?
            </p>
            <p>
              Получается, что в этих странах в марте не существует целого часа
              между 2:00 и 3:00 ночи, а в октябре наоборот — есть лишний час.
              Получается, если мы возьмём 28 марта 2020 г. 2:30 ночи и прибавим
              1 год, мы получим несуществующее время 28 марта 2020 г. 2:30.
            </p>
            <p>
              Эту проблему уже так просто не решить, ведь дата от года к году
              плавает. К тому же в разных странах часы переводят в разные числа,
              а где-то, как в России, не переводят вообще. Что же тогда делать?
            </p>
            <p>
              А решение на самом деле простое. Математические операции над
              временем стоит проводить, сначала переведя дату и время в
              Unix-формат. Берём исходную дату и время, используя готовую
              функцию, переводим в секунды, начиная с 1 января 1970 года
              прибавляем нужное количество секунд (например, 10 лет = 10 * 365 *
              24 * 60 * 60 секунд), используя другую готовую функцию, переводим
              обратно в дату и время.
            </p>
            <p>
              В современных языках программирования для подобных операций всегда
              есть готовые функции или библиотеки. Например в JavaScript:
              moment().add(10, &apos;years&apos;); в C#:
              DateTime.Now.AddYears(10).
            </p>
            <p>
              Итак, получается, что при работе с такой простой и привычной
              сущностью, как время, надо быть очень внимательным. Не стоит
              забывать про такие вещи, как високосный год и перевод часов. Не
              стоит пытаться обойти проблемы, добавляя лишние условия, — для
              начала попробуйте найти уже готовое решение. Именно так и
              становятся настоящими профессионалами.
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
            authorName="Игорь Поддубный"
            notice="Автор статьи. Разработчик"
          />
        </Container>
      </Section>
    </Layout>
  )
}
