import { useState } from 'react'
import { Layout } from '../../layout'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { SchoolItem } from '../../ui/SchoolItem'
import s from './School.module.sass'

export const School = () => {
  const [show, setShow] = useState(true)

  const schoolItemSwitcher = () => setShow(!show)

  return (
    <Layout>
      <Section className={s.school}>
        <Container>
          <SectionTitle className={s.school__title}>О Школе</SectionTitle>
          <div className={s.school__items}>
            <SchoolItem
              id={1}
              title="text"
              content="content"
              onClick={schoolItemSwitcher}
              show={show}
            />
            <SchoolItem
              id={1}
              title="text"
              content="content"
              onClick={schoolItemSwitcher}
              show={show}
            />
            <SchoolItem
              id={1}
              title="text"
              content="content"
              onClick={schoolItemSwitcher}
              show={show}
            />
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
