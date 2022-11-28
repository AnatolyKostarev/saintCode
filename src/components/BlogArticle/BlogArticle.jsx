import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import play from './icon-play.svg'
import s from './BlogArticle.module.sass'

export const BlogArticle = ({
  className,
  image,
  caption,
  description,
  route,
  icon = true,
}) => {
  return (
    <article className={clsx(s.blogArticle, className)}>
      <div className={s.blogArticle__pic}>
        <Link to={route}>
          <img
            src={image}
            alt=""
            width="500"
            height="190"
          />
        </Link>
        <div className={s.blogArticle__play}>
          <img
            className={s.blogArticle__img}
            src={icon ? play : null}
            alt="play"
            width="58"
            height="58"
          />
        </div>
      </div>
      <div className={s.blogArticle__info}>
        <Link to={route}>
          <p className={s.blogArticle__caption}>
            {caption}
          </p>
        </Link>
        <Link to={route}>
          <p className={s.blogArticle__description}>
            {description}
          </p>
        </Link>
      </div>
    </article>
  )
}
