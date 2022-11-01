import React from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { StoryCard } from '../../ui/StoryCard'
import { studentData } from './studentData'
// import 'swiper/css'
import s from './StudentStory.module.sass'

export const StudentStory = () => {
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
