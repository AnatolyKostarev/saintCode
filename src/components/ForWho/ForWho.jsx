import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../../ui/Container'
import { Section } from '../../ui/Section'
import { ForArticle } from '../../ui/ForArticle'
import leftSVG from './left.svg'
import rightSVG from './rigth.svg'
import s from './ForWho.module.sass'
import { SectionTitle } from '../../ui/SectionTitle'

export const ForWho = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.ForWho}>
      <Container className={s.container}>
        <SectionTitle className={s.title}>
          <span className="transparent--blue">
            {t('ForWho.span1')}
          </span>
          {' '}
          {t('ForWho.span2')}
          {' '}
          <span
            className="transparent--blue"
          >
            {t('ForWho.span3')}
            <br />
            {' '}
            {t('ForWho.span4')}
            {' '}
          </span>
          {t('ForWho.span5')}
        </SectionTitle>
        <div className={s.article__wrapper}>
          <ForArticle svg={leftSVG}>
            <p className={s.text}>
              {t('ForWho.span6')}
              {' '}
              <span className="focus">
                {t('ForWho.span7')}
              </span>
              {' '}
              {t('ForWho.span8')}
            </p>
          </ForArticle>
          <ForArticle svg={rightSVG}>
            <p className={s.text}>
              {t('ForWho.text1')}
              {' '}
              <span className="focus">
                {t('ForWho.text2')}
              </span>
              {t('ForWho.text3')}
            </p>
          </ForArticle>
        </div>
        <div className={s.intersec} />
      </Container>
    </Section>
  )
}
