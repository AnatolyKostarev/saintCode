import React from 'react'
import clsx from 'clsx'
import s from './ForWho.module.sass'
import Title from '../../ui/Title/Title'
import { Container } from '../../ui/Container/Container'
import ForArticle from '../../ui/ForArticle/ForArticle'
import leftSVG from './left.svg'
import rightSVG from './rigth.svg'

const ForWho = ({ className }) => {
  return (
    <section className={clsx(s.ForWho, className)}>
      <Container>
        <Title>
          <span className="transparent--blue">
            Тебе
          </span>
          {' '}
          подходит
          {' '}
          <span
            className="transparent--blue"
          >
            наш
            <br />
            {' '}
            формат,
            {' '}
          </span>
          если ты:
        </Title>
        <div className={clsx(s.article__wrapper)}>
          <ForArticle svg={leftSVG}>
            <p className={clsx(s.text)}>
              Хочешь
              {' '}
              <span className="focus">
                быстро найти первую работу
              </span>
              {' '}
              разработчиком
            </p>
          </ForArticle>
          <ForArticle svg={rightSVG}>
            <p className={clsx(s.text)}>
              Готов учиться пять дней в неделю с 12.00 до 19.00, пахать как раб на
              галерах,
              {' '}
              <span className="focus">
                чтобы освоить за три месяца программу
              </span>
              , которую другие
              осваивают за полтора года
            </p>
          </ForArticle>
        </div>
      </Container>
    </section>
  )
}

export default ForWho
