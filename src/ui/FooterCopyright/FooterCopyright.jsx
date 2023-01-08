import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Container } from '../Container'
import { Button } from '../Button'
import s from './FooterCopyright.module.sass'
import { Modal } from '../../components/Modal'
import { Policy } from '../../components/Policy'

export const FooterCopyright = ({ className }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

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
        <Button onClick={() => setIsOpen(true)} className={clsx(s.policy)} text={t('FooterCopyright.policy')} />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Policy />
        </Modal>
      </Container>
    </div>
  )
}
