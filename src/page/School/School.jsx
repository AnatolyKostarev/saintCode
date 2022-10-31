import { useState } from 'react'
import { Layout } from '../../layout/Layout'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import s from './School.module.sass'

export const School = () => {
  const [show, setShow] = useState(true)

  const full = {
    height: '100%',
    transition: '0.3s',
  }

  const hide = {
    height: '100px',
    overflow: 'hidden',
    transition: '0.3s',
  }

  const isPlus = {
    display: 'inline-block',
    padding: '5px 16px',
    width: '48px',
    height: '48px',
    background: 'rgba(62, 43, 46, 1)',
    border: '0',
    borderRadius: '50%',
    transition: 'all 0.2s linear',
    transform: 'rotate(45deg)',
  }

  const isCross = {
    display: 'inline-block',
    padding: '5px 16px',
    width: '48px',
    height: '48px',
    background: 'rgba(255,255,255, 1)',
    border: '0',
    borderRadius: '50%',
    color: 'rgba(62, 43, 46, 1)',
    transition: 'all 0.2s linear',
    transform: 'rotate(90deg)',
  }

  return (
    <Layout>
      <Section className={s.school}>
        <Container>
          <SectionTitle className={s.school__title}>О Школе</SectionTitle>
          <div className={s.school__items}>
            <div className={s.school__item} style={show ? hide : full}>
              <div className={s.school__btns}>
                <button type="button" onClick={() => setShow(!show)}>
                  Как мы создали проект?
                  <div
                    className={s.school__cross}
                    style={show ? isPlus : isCross}
                  >
                    &#10006;
                  </div>
                </button>
              </div>
              <p
                className={s.school__text}
                style={
                  show
                    ? { opacity: 0, transition: '0.4s' }
                    : { opacity: 1, transition: '1.2s' }
                }
              >
                В основе нашего проекта программа американских буткемпов: они
                существуют уже 10 лет и высокий процент их выпускников находит
                работу. Получившуюся программу обучения мы показали знакомым,
                которые работают в крупных российских и иностранных
                IT-компаниях, чтобы понять, насколько она соответствует
                требованиям их компаний. Мы нашли единомышленников с большим
                опытом в программировании, которые устали просто писать код, им
                больше хотелось общения с людьми — они созрели для преподавания.
                Оказалось, что их педагогических навыков часто не хватает,
                несмотря на то, что они уже обучали стажёров в своей компании
                или учили кодить друзей. Мы научили их преподавать
                профессионально. Наша команда из Питера, если ты понимаешь, что
                это значит) Питер — как метафора культурной столицы, места для
                задротов и человеческого отношения.
              </p>
            </div>
            {/* <SchoolItem
              show={show}
              full={full}
              hide={hide}
              isPlus={isPlus}
              isCross={isCross}
              title="text"
              content="content"
              onClick={() => setShow(!show)}
            /> */}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
