import React from 'react'
import clsx from 'clsx'
import s from './Teachers.module.sass'
import { Section } from '../../ui/Section/Section'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import { Container } from '../../ui/Container/Container'
import TeacherCard from '../../ui/TeacherCard/TeacherCard'
import Alex from './Alex.png'
import Alex2x from './Alex-2x.png'
import Yuri from './Yuri.png'
import Yuri2x from './Yuri-2x.png'
import Vasylii from './Vasylii.png'
import Vasylii2x from './Vasylii-2x.png'
import Kostya from './Kostya.png'
import Kostya2x from './Kostya-2x.png'

const Teachers = ({ className }) => {
  return (
    <Section className={clsx(s.Teachers, className)}>
      <Container>
        <SectionTitle>Преподаватели</SectionTitle>
        <div className={s.cards__container}>
          <TeacherCard
            largePhoto={Yuri2x}
            smallPhoto={Yuri}
            teacherName="Юра Матюхин"
            experience="8 лет"
            traineeCount="Обучил 42 стажёра"
            stack="HTML, CSS, JavaScript (React/Redux, Vue, Svelte, TypeScript), Webpack, Sass, BEM"
            className={s.long}
          >
            <ul className={clsx(s.list)}>
              <li className={clsx(s.list__item)}>
                Frontend в канадском стартапе Life House Hotels, в студии StudWork,
                в спортивном приложении Ride With Locals. А также создавал аналог Jira (Pyrus)
              </li>
              <li className={clsx(s.list__item)}>
                Промо-проекты для Lays, Philips, Siemens, Beeline, Ford, Amediateka,
                Renault, Sony Xperia, Unicredit Bank
              </li>
            </ul>
          </TeacherCard>
          <TeacherCard
            largePhoto={Kostya2x}
            smallPhoto={Kostya}
            teacherName="Костя Ефимов"
            experience="7 лет"
            traineeCount="Обучил 16 стажёров"
            stack="HTML, CSS, JS (Vue, Vuex), Stylus, BEM, PHP (Laravel, Symfony), C, PostgreSQL, MySQL, Redis"
            className={s.long}
          >
            <ul className={clsx(s.list)}>
              <li className={clsx(s.list__item)}>
                Fullstack web-developer в Пилки, в американском проекте ConsumerReports,
                в новозеландском 7Glyphs. А также создавал криптокошелёк FreeWallet и сайт
                крупного агентство недвижимости Владис
              </li>
              <li className={clsx(s.list__item)}>
                Разработал систему контроля и взаимодействия автоматов по продаже воды
              </li>

            </ul>
          </TeacherCard>
          <TeacherCard
            largePhoto={Vasylii2x}
            smallPhoto={Vasylii}
            teacherName="Вася Шлыков"
            experience="5 лет"
            traineeCount="Обучил 4 стажёров"
            stack="HTML, CSS, JavaScript/jQuery, PostgreSQL, MongoDB, Node.js, Express, Hapi, Nest, React, TypeScript, Redux, Context API"
            className={s.short}
          >
            <ul className={clsx(s.list)}>
              <li className={clsx(s.list__item)}>
                Backend в Кари, MySoft
              </li>
            </ul>
          </TeacherCard>
          <TeacherCard
            largePhoto={Alex2x}
            smallPhoto={Alex}
            teacherName="Саша Вивтоненко"
            experience="7 лет"
            traineeCount="Обучил 23 стажёра"
            stack="HTML, CSS, JavaScript (Svelte), Node.js, Nginx, PostgreSQL, NoSQL"
            className={s.short}
          >
            <ul className={clsx(s.list)}>
              <li className={clsx(s.list__item)}>
                Руководителем IT-отдела EthereumWorks, VPluse
              </li>
              <li className={clsx(s.list__item)}>
                Разработчиком в CRM Agency Smart
              </li>
            </ul>
          </TeacherCard>
        </div>
      </Container>
    </Section>
  )
}

export default Teachers
