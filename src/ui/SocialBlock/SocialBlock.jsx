import React from 'react'
import clsx from 'clsx'
import { SocialRound } from '../SocialRound/SocialRound'
import s from './SocialBlock.module.sass'

export const SocialBlock = ({
  className, fb, vk, tg,
}) => {
  return (
    <div className={clsx(s.SocialBlock, className)}>
      <SocialRound href="https://vk.com/public191201156" alt="vk" icon={vk} />
      <SocialRound href="https://www.facebook.com/Saint-Code-Bootcamp-114797186729898" alt="fb" icon={fb} />
      <SocialRound href="https://t.me/scbootcamp" alt="tg" icon={tg} />
    </div>
  )
}
