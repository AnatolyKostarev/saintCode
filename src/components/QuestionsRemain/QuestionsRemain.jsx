import React from 'react'
import { Section } from '../../ui/Section/Section'
import { Container } from '../../ui/Container/Container'
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle'
import { Form } from '../../ui/Form/Form'
import { Input } from '../../ui/Input/Input'
import { Select } from '../../ui/Select/Select'
import Button from '../../ui/Button/Button'
import s from './QuestionsReman.module.sass'

export const QuestionsRemain = () => {
  return (
    <Section className={s.QuestionsRemain}>
      <Container>
        <SectionTitle className={s.QuestionsRemain__title}>
          Остались вопросы?
        </SectionTitle>
        <p>
          Запишись на бесплатную консультацию — всё расскажем и объясним
        </p>
        <Form
          className={s.QuestionsRemain__form}
          onSubmit={e => e.preventDefault()}
        >
          <div>
            <Input
              className={s.QuestionsRemain__input}
              type="text"
              label="Имя"
              id="user"
              placeholder="Артём"
            />
          </div>
          <div>
            <Input
              className={s.QuestionsRemain__input}
              type="tel"
              label="Телефон"
              id="tel"
              placeholder="+7 999 999 99 99"
            />
          </div>
          <div>
            <Select
              className={s.QuestionsRemain__input}
              type="tel"
              label="Меcсенджер"
              id="messanger"
              name="messanger"
            >
              <option selected disabled>
                Месcенджер
              </option>
              <option>
                WhatsApp
              </option>
              <option>
                Telegram
              </option>
              <option>
                Viber
              </option>
            </Select>
          </div>

          <Button
            className={s.QuestionsRemain__btn}
            text="Оставить заявку"
            onClick={() => console.log('click')}
          />
        </Form>
      </Container>
    </Section>
  )
}
