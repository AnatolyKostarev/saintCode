import React, {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react'
import clsx from 'clsx'
import s from './Slider.module.sass'
import arrow from './Vector.svg'
import { studentData } from './studentData'
import { StoryCard } from '../../ui/StoryCard'
import { Modal } from '../Modal'
import { Container } from '../../ui/Container'

export const Slider = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectID, setSelectID] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  let [position, setPosition] = useState(0)
  const { innerWidth: width } = window
  const [slideWidth, setSlideWidth] = useState(540)
  const slider = useRef(null)
  const slideRef = useRef(null)
  const minSwipeDistance = 50

  const slideResize = () => {
    setSlideWidth(slideRef.current.clientWidth)
  }

  useEffect(() => slideResize(), [])

  const onTouchStart = e => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX)

  const prevHandler = () => {
    if (position === 0) return null
    setPosition(position += slideWidth)
    return slider.current.childNodes.forEach(e => e.style = `transform: translateX(${position}px)`)
  }
  const nextHandler = () => {
    if (position === -(slideWidth * 4)) return null
    setPosition(position -= slideWidth)
    return slider.current.childNodes.forEach(e => e.style = `transform: translateX(${position}px)`)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextHandler() : prevHandler()
  }

  return (
    <div className={clsx(s.Slider, className)}>
      <div
        ref={slider}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={clsx(s.Slider__track)}
      >
        {studentData.map(({ ...student }) => (
          <div
            className={clsx(s.slide)}
            onClick={() => {
              setSelectID(student.id)
              setIsOpen(true)
            }}
            ref={slideRef}
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
          </div>
        ))}
      </div>
      <Container className={s.container}>
        <div className={clsx(s.Slider__pagination)}>
          <input
            className={clsx(s.Slider__btn, { [s.transparent]: position >= 0 })}
            disabled={position >= 0}
            onClick={prevHandler}
            type="image"
            src={arrow}
            alt="<"
          />
          <div className={clsx(s.Slider__values)}>
            <>
              {(() => {
                switch (position) {
                  case 0: return (
                    <span>
                      1
                    </span>
                  )
                  case -(slideWidth): return (
                    <span>
                      2
                    </span>
                  )
                  case -((slideWidth * 2)): return (
                    <span>
                      3
                    </span>
                  )
                  case -(slideWidth * 3): return (
                    <span>
                      4
                    </span>
                  )
                  case -(slideWidth * 4): return (
                    <span>
                      5
                    </span>
                  )
                  default: return null
                }
              })()}
            </>
            <span className={s.Slider__separator}>
              /
            </span>
            <span>
              5
            </span>
          </div>
          <input
            className={clsx(s.Slider__btn, { [s.transparent]: position <= -slideWidth * 4 })}
            disabled={position <= -2260}
            onClick={nextHandler}
            style={{ transform: 'rotate(-180deg)' }}
            type="image"
            src={arrow}
            alt=">"
          />
        </div>
      </Container>
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
              setIsOpen={setIsOpen}
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
    </div>
  )
}
