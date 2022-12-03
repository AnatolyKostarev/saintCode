import React from 'react'
import clsx from 'clsx'
import s from './AuthorFooter.module.sass'

export const AuthorFooter = ({
  className,
  avatar,
  alt,
  width,
  height,
  authorName,
  notice,
}) => {
  return (
    <div className={clsx(s.authorFooter, className)}>
      <div className={s.authorFooter__avatar}>
        <img
          src={avatar}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className={s.authorFooter__info}>
        <p>
          {authorName}
        </p>
        <p>
          {notice}
        </p>
      </div>
    </div>
  )
}
