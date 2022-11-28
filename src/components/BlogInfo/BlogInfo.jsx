import React from 'react'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { BlogTitle } from '../BlogTitle/BlogTitle'
import s from './BlogInfo.module.sass'

export const BlogInfo = () => {
  return (
    <Section className={s.blogInfo}>
      <Container>
        <BlogTitle />
      </Container>
    </Section>
  )
}
