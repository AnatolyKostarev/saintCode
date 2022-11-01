import React from 'react'
import clsx from 'clsx'
import { SocialRound } from '../SocialRound/SocialRound'
import s from './SocialBlock.module.sass'

export const SocialBlock = ({
  className, fb, vk, inst,
}) => {
  return (
    <div className={clsx(s.SocialBlock, className)}>
      <SocialRound icon={vk} />
      <SocialRound icon={fb} />
      <SocialRound icon={inst} />
    </div>
  )
}
