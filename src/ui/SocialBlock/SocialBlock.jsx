import React from 'react'
import clsx from 'clsx'
import s from './SocialBlock.module.sass'
import SocialRound from '../SocialRound/SocialRound'

const SocialBlock = ({
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

export default SocialBlock
