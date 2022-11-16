import React from 'react'
import clsx from 'clsx'
import './Alert.css'

export const Alert = ({ children, className, type }) => {
  return (
    <div
      className={clsx(type, className)}
      type={type}
    >
      <p className="children">
        {children}
      </p>
    </div>
  )
}
