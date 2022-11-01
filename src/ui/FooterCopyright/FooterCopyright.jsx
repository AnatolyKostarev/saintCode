import React from 'react'
import clsx from 'clsx'
import s from './FooterCopyright.module.sass'
import { Container } from '../Container/Container'
import Button from '../Button/Button'

const FooterCopyright = ({ className }) => {
  return (
    <div className={clsx(s.FooterCopyright, className)}>
      <Container className={s.copy}>
        <p className={clsx(s.text)}>
          © 2019-
          {new Date().getFullYear()}
        </p>
        <p className={clsx(s.text)}>
          ИП Мельников | ИНН 781435967821 ОГРНИП 319784700259930
        </p>
        <Button className={clsx(s.policy)} text="Политика конфиденциальности" />
      </Container>
    </div>
  )
}

export default FooterCopyright
