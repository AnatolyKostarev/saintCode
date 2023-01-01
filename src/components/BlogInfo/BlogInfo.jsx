import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { BlogTitle } from '../BlogTitle/BlogTitle'
import { BlogArticle } from '../BlogArticle'
import { Button } from '../../ui/Button'
import { articles } from './articles'
import s from './BlogInfo.module.sass'

export const BlogInfo = () => {
  const [slice, setSlice] = useState(false)
  const { t } = useTranslation()

  return (
    <Section className={s.blogInfo}>
      <Container>
        <BlogTitle />
        <div className={s.blogInfo__articles} style={slice ? { paddingBottom: '60px' } : { paddingBottom: '7px' }}>
          {(slice ? articles.slice(0, 3) : articles).map(article => (
            <BlogArticle
              {...article}
              key={article.id}
            />
          ))}
        </div>
        {slice && (
          <Button
            className={s.blogInfo__btn}
            text={t('BlogInfo.btn')}
            type="button"
            onClick={() => setSlice(false)}
          />
        )}
      </Container>
    </Section>
  )
}
