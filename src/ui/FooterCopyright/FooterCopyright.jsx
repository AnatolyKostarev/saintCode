import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Container } from '../Container'
import { Button } from '../Button'
import s from './FooterCopyright.module.sass'

export const FooterCopyright = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(s.FooterCopyright, className)}>
      <Container className={s.copy}>
        <div className={s.left}>
          <p className={clsx(s.text)}>
            © 2019-
            {new Date().getFullYear()}
          </p>
          <p className={clsx(s.text)}>
            {t('FooterCopyright.text')}
          </p>
        </div>
        <Button className={clsx(s.policy)} text={t('FooterCopyright.policy')} />
      </Container>
    </div>
  )
}
