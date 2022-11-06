import React from 'react'
import clsx from 'clsx'
import s from './TableColumn.module.sass'

export const TableColumn = ({
  className,
  schoolName,
  price,
  hoursWithTeacher,
  practiceHours,
  programDuration,
  pricePerHour,
  programQuality,
  supportAfter,
  groupSize,
  hoursWithRecording,
  additionalInfo,
  teacherSupportTime,
}) => {
  return (
    <div className={clsx(s.TableColumn, className)}>
      <div className={clsx(s.TableColumn__cell, s.school)}>
        {schoolName}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {price}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {hoursWithTeacher}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {practiceHours}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {programDuration}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {pricePerHour}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {programQuality}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {supportAfter}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {groupSize}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {hoursWithRecording}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {additionalInfo}
      </div>
      <div className={clsx(s.TableColumn__cell)}>
        {teacherSupportTime}
      </div>
    </div>
  )
}
