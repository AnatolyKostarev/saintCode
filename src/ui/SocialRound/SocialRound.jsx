import React from 'react'
import clsx from 'clsx'
import s from './SocialRound.module.sass'

export const SocialRound = ({
  className, icon, alt, href = '#',
}) => {
  return (
    <a href={href} className={clsx(s.SocialRound, className)}>
      <img className={clsx(s.img)} src={icon} alt={alt} />
    </a>
  )
}
