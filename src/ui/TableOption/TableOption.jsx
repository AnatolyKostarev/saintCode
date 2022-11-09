import React from 'react'
import clsx from 'clsx'
import s from './TableOption.module.sass'

export const TableOption = ({
  schoolName,
  selectedSchool,
  setSelectedSchool,
}) => {
  const addSchool = name => {
    selectedSchool.length > 2
      ? setSelectedSchool(['Saint Code', ...selectedSchool.splice(2), name])
      : setSelectedSchool([...selectedSchool, name])
  }
  const delSchool = name => {
    const filteredSchools = selectedSchool.filter(school => school !== name)
    setSelectedSchool([...filteredSchools])
  }

  return (
    <button
      onClick={() => {
        selectedSchool.includes(schoolName)
          ? delSchool(schoolName)
          : addSchool(schoolName)
      }}
      type="button"
      className={clsx(s.TableOption, { [s.selected]: selectedSchool.includes(schoolName) })}
    >
      {schoolName}
    </button>
  )
}
