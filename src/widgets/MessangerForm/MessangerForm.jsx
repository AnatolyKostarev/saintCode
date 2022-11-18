import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form } from '../../ui/Form'
import { Input } from '../../ui/Input'
import { Select } from '../../ui/Select'
import { Button } from '../../ui/Button'
import s from './MessangerForm.module.sass'

export const MessangerForm = () => {
  const { t } = useTranslation()

  return (
    <>
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
    </>
  )
}
