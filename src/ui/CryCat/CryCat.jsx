import React from 'react'
import clsx from 'clsx'
import Pic from './cat.webp'
import PicX2 from './cat-2x.webp'
import s from './CryCat.module.sass'

export const CryCat = () => {
  return (
    <div className={clsx(s.CryCat)}>
      <img
        className={clsx(s.CryCat__img)}
        src={Pic}
        srcSet={`${Pic} 1x, ${PicX2} 2x`}
        width="450"
        height="554"
        alt="404 | Crying Cat - picture"
      />
    </div>
  )
}
