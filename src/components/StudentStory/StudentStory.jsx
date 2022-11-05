import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper'
import s from './StudentStory.module.sass'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import StoryCard from '../../ui/StoryCard/StoryCard'
import { studentData } from './studentData'
import Modal from '../Modal/Modal'

const StudentStory = () => {
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

export default StudentStory
