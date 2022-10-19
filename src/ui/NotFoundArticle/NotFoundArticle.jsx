import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import s from './NotFoundArticle.module.sass'
import Button from '../Button/Button'

const NotFoundArticle = ({ className }) => {
  return (
    <article className={clsx(s.NotFoundArticle, className)}>
      <Title>
        <span className="transparent">Упс!</span>
        {' '}
        Очень жаль
      </Title>
      <span className={clsx(s.Error, 'transparent')}>
        Мы не можем открыть эту страницу
      </span
      >
      <Link to="/">
        <Button className={s.btn} text="Пойдем домой" />
      </Link>
    </article>
  )
}

export default NotFoundArticle
