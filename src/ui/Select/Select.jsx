import React from 'react'
import clsx from 'clsx'
import s from './Select.module.sass'

export const Select = ({
  className, id, name, children, label,
}) => {
  return (
    <>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <div className={s.select}>
        <select className={clsx(s.Select, className)} id={id} name={name}>
          {children}
        </select>
      </div>
     
    </>
    
  )
}
