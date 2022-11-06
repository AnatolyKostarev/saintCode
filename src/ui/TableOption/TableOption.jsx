import React, { useState } from 'react'
import clsx from 'clsx'
import s from './TableOption.module.sass'

export const TableOption = ({
  className, schoolName, selectedSchool, setSelectedSchool,
}) => {
  const [selected, setSelected] = useState(false)

  const addSchool = name => {
    setSelected(!selected)
    setSelectedSchool([...selectedSchool, name])
  }
  const delSchool = name => {
    setSelected(!selected)
    const newSelectedArr = selectedSchool.filter(elem => elem !== name)
    setSelectedSchool([...newSelectedArr])
  }

  return (
    <button
      onClick={() => {
        selected ? delSchool(schoolName) : addSchool(schoolName)
      }}
      type="button"
      className={clsx(s.TableOption, className, { [s.selected]: selected })}
    >
      {schoolName}
    </button>
  )
}
