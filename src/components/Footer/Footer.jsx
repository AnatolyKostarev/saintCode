import React from 'react'
import clsx from 'clsx'
import { Container } from '../../ui/Container'
import { FooterContacts } from '../../ui/FooterContacts'
import { FooterCopyright } from '../../ui/FooterCopyright'
import map from './map.png'
import s from './Footer.module.sass'

export const Footer = ({ className }) => {
  return (
    <footer className={clsx(s.Footer, className)}>
      <div className={s.Footer__map}>
        <img src={map} alt="map" />
      </div>
      <Container>
        <FooterContacts />
      </Container>
      <FooterCopyright />
    </footer>
  )
}
