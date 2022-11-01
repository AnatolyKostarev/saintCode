import React from 'react'
import clsx from 'clsx'
import { Container } from '../../ui/Container/Container'
import { FooterContacts } from '../../ui/FooterContacts'
import { FooterCopyright } from '../../ui/FooterCopyright'
import s from './Footer.module.sass'

export const Footer = ({ className }) => {
  return (
    <footer className={clsx(s.Footer, className)}>
      <Container>
        <FooterContacts />
      </Container>
      <FooterCopyright />
    </footer>
  )
}
