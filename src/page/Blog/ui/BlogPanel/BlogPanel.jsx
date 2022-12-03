import React from 'react'
import clsx from 'clsx'
import s from './BlogPanel.module.sass'

export const BlogPanel = ({ className, children, background }) => {
  return (
    <div
      className={clsx(s.blogPanel, className)}
      style={{ background: `${background}` }}
    >
      {children}
    </div>
  )
}
