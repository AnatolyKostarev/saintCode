import React from 'react'
import clsx from 'clsx'
import s from './TableRow.module.sass'
import { Container } from '../Container'

export const TableRow = ({
  className, firstParam, secondParam, thirdParam, children,
}) => {
  return (
    <div className={clsx(s.TableRow, className)}>
      <Container>
        <div className={s.TableRow__flex}>
          <div className={clsx(s.TableRow__cell, s.first)}>
            {children}
          </div>
          <div className={clsx(s.TableRow__cell)}>
            {firstParam}
          </div>
          <div className={clsx(s.TableRow__cell)}>
            {secondParam}
          </div>
          <div className={clsx(s.TableRow__cell)}>
            {thirdParam}
          </div>
        </div>
      </Container>
    </div>
  )
}
