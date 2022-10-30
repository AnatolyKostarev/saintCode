import React from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import s from './StudentStory.module.sass'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import StoryCard from '../../ui/StoryCard/StoryCard'
import { studentData } from './studentData'

const StudentStory = () => {
  return (
    <Section className={clsx(s.StudentStory)}>
      <Container>
        <SectionTitle>
          Истории студентов
        </SectionTitle>
      </Container>
      <Swiper
        className={clsx(s.swiper)}
        // spaceBetween={50}
        slidesPerView={2.5}
      >
        {studentData.map(({ ...student }) => (
          <SwiperSlide>
            <StoryCard
              {...student}
              genderOption={student.studentGender === 'female'
                ? 'Устроилась фронтенд-разработчицей в '
                : 'Устроился фронтенд-разработчиком в '}
              key={student.id}
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
    </Section>
  )
}

export default StudentStory
