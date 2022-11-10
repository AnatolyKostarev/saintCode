import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Section } from '../../ui/Section'
import { Container } from '../../ui/Container'
import { SectionTitle } from '../../ui/SectionTitle'
import { Form } from '../../ui/Form'
import { Input } from '../../ui/Input'
import { Select } from '../../ui/Select'
import { Button } from '../../ui/Button'
import s from './QuestionsReman.module.sass'

export const QuestionsRemain = () => {
  const { t } = useTranslation()
  return (
    <Section className={s.QuestionsRemain}>
      <Container>
        <SectionTitle className={s.QuestionsRemain__title}>
          {t('QuestionsRemain.title')}
        </SectionTitle>
        <p className={s.QuestionsRemain__subtitle}>
          {t('QuestionsRemain.subtitle')}
        </p>
        <Form
          className={s.QuestionsRemain__form}
          onSubmit={e => e.preventDefault()}
        >
          <div>
            <Input
              className={s.QuestionsRemain__input}
              type="text"
              label={t('QuestionsRemain.input.label.name')}
              id="user"
              placeholder={t('QuestionsRemain.input.placeholder.name')}
            />
          </div>
          <div>
            <Input
              className={s.QuestionsRemain__input}
              type="tel"
              label={t('QuestionsRemain.input.label.phone')}
              id="tel"
              placeholder={t('QuestionsRemain.input.placeholder.phone')}
            />
          </div>
          <div>
            <Select
              className={s.QuestionsRemain__input}
              type="tel"
              label={t('QuestionsRemain.input.label.messanger')}
              id="messanger"
              name="messanger"
            >
              <option
                selected
                disabled
              >
                {t('QuestionsRemain.input.option.messanger')}
              </option>
              <option>
                {t('QuestionsRemain.input.option.WhatsApp')}
              </option>
              <option>
                {t('QuestionsRemain.input.option.Telegram')}
              </option>
              <option>
                {t('QuestionsRemain.input.option.Viber')}
              </option>
            </Select>
          </div>

          <Button
            className={s.QuestionsRemain__btn}
            text={t('QuestionsRemain.btn')}
            onClick={() => console.log('click')}
          />
        </Form>
        <p className={s.QuestionsRemain__conditions}>
          {t('QuestionsRemain.conditions.text')}
          { ' ' }
          <span>
            <Link to="*">
              {t('QuestionsRemain.conditions.link')}
            </Link>
          </span>
        </p>
      </Container>
    </Section>
  )
}
