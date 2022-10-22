import React from 'react'
import clsx from 'clsx'
import s from './Footer.module.sass'
import FooterContacts from '../../ui/FooterContacts/FooterContacts'
import { Container } from '../../ui/Container/Container'
import FooterCopyright from '../../ui/FooterCopyright/FooterCopyright'

const Footer = ({ className }) => {
  return (
    <footer className={clsx(s.Footer, className)}>
      <Container>
        <FooterContacts />
      </Container>
      <FooterCopyright />
    </footer>
  )
}

export default Footer
