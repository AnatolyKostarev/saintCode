import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { BlogTitle } from '../BlogTitle/BlogTitle'
import { BlogArticle } from '../BlogArticle'
import { articles } from './articles'
import s from './BlogInfo.module.sass'

export const BlogInfo = () => {
  return (
    <Section className={s.blogInfo}>
      <Container>
        <BlogTitle />
        <div className={s.blogInfo__articles}>
          {articles.map(article => (
            <BlogArticle {...article} key={article.id} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
