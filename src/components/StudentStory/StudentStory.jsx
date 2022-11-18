import React, { useState } from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/virtual'
import { Navigation, Virtual } from 'swiper'
import s from './StudentStory.module.sass'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { StoryCard } from '../../ui/StoryCard'
import { studentData } from './studentData'
import { Modal } from '../Modal'
import arrow from './Vector.svg'

export const StudentStory = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectID, setSelectID] = useState(null)

  return (
    <Section className={clsx(s.StudentStory)}>
      <Container>
        <SectionTitle>
          Истории студентов
        </SectionTitle>
      </Container>
      <Swiper
        className={clsx(s.swiper)}
        slidesPerView="auto"
        modules={[Navigation, Virtual]}
      >
        {studentData.map(({ ...student }) => (
          <SwiperSlide
            className={clsx(s.slide)}
            onClick={() => {
              setSelectID(student.id)
              setIsOpen(true)
            }}
          >
            <StoryCard
              {...student}
              genderOption={student.studentGender === 'female'
                ? 'Устроилась фронтенд-разработчицей в '
                : 'Устроился фронтенд-разработчиком в '}
              key={student.id}
              className={s.closed}
            >
              {student.QA.map(e => (
                <div key={e.answer}>
                  <strong className={clsx(s.question)}>
                    {e.question}
                  </strong>
                  <p className={clsx(s.answer)}>
                    {e.answer}
                  </p>
                </div>
              ))}
            </StoryCard>
          </SwiperSlide>
        ))}
        <div className={clsx(s.swiper__pagination)}>
          <input type="image" src={arrow} alt="<" />
          <div className={clsx(s.swiper__values)}>
            <span>
              1
            </span>
            <span className={s.swiper__separator}>
              /
            </span>
            <span>
              5
            </span>
          </div>
          <input style={{ transform: 'rotate(-180deg)' }} type="image" src={arrow} alt=">" />
        </div>
      </Swiper>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {studentData
          .filter(elem => elem.id === selectID)
          .map(({ ...elem }) => (
            <StoryCard
              {...elem}
              genderOption={elem.studentGender === 'female'
                ? 'Устроилась фронтенд-разработчицей в '
                : 'Устроился фронтенд-разработчиком в '}
              key={elem.id}
              isOpen={isOpen}
            >
              {elem.QA.map(e => (
                <div key={e.answer}>
                  <strong className={clsx(s.question)}>
                    {e.question}
                  </strong>
                  <p className={clsx(s.answer)}>
                    {e.answer}
                  </p>
                </div>
              ))}
            </StoryCard>
          ))}
      </Modal>
    </Section>
  )
}
