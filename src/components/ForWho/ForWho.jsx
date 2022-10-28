import React from 'react'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'
import Title from '../../ui/Title/Title'
import ForArticle from '../../ui/ForArticle/ForArticle'
import leftSVG from './left.svg'
import rightSVG from './rigth.svg'
import s from './ForWho.module.sass'

const ForWho = () => {
  return (
    <Section className={s.ForWho}>
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
        <div className={s.article__wrapper}>
          <ForArticle svg={leftSVG}>
            <p className={s.text}>
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
            <p className={s.text}>
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
    </Section>
  )
}

export default ForWho
