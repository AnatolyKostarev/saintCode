import React from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import AuthorPhoto from './Author.png'
import AuthorPhoto2x from './Author2x.png'
import Devis from './devis.svg'
import s from './Author.module.sass'

export const Author = () => {
  const { t } = useTranslation()

  return (
    <Section className={s.Author}>
      <Container className={s.Author__container}>
        <div className={s.left}>
          <div className={s.img__container}>
            <img
              className={s.img}
              srcSet={`${AuthorPhoto} 1x, ${AuthorPhoto2x} 2x`}
              width="370"
              height="370"
              alt="Author photo"
            />
          </div>
          <div className={s.text}>
            <p className={s.Author__name}>
              {t('Author.name')}
            </p>
            <p className={s.Author__info}>
              {t('Author.info')}
            </p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.devis__block}>
            <img
              className={s.devis}
              src={Devis}
              width="38"
              height="36"
              alt="``"
            />
          </div>
          <SectionTitle className={s.title}>
            {t('Author.title.block1')}
            {' '}
            <span className="transparent">
              {t('Author.title.block2')}
              {' '}
            </span>
            {' '}
            {t('Author.title.block3')}
            <br />
            {t('Author.title.block4')}
          </SectionTitle>
        </div>
      </Container>
    </Section>
  )
}
