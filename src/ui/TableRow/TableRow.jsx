import React from 'react'
import clsx from 'clsx'
import s from './TableRow.module.sass'
import { Container } from '../Container'

export const TableRow = ({
  firstParam, children,
}) => {
  return (
    <div className={clsx(s.TableRow)}>
      <Container>
        <div className={s.TableRow__flex}>
          <div className={clsx(s.TableRow__cell, s.first)}>
            <span>
              {firstParam}
            </span>
          </div>
          { children }
        </div>
      </Container>
    </div>
  )
}
