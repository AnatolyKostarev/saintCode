import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { handleChange } from '../../utils/inputHandleChange'
import { Form } from '../../ui/Form'
import { SourceLoader } from '../../ui/SourceLoader'
import { Alert } from '../../ui/Alert'
import { Button } from '../../ui/Button'
import s from './MessangerForm.module.sass'

export const MessangerForm = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState({
    name: '',
    tel: '',
    messanger: '',
  })

  const [isLoader, setIsLoader] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [disabled, setDisabled] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      tel: '',
      messanger: '',
    },
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        tel: '',
        messanger: '',
      })
    }
  }, [formState, reset])

  const onSubmit = async data => {
    setIsLoader(true)
    console.info(data)
    try {
      const response = await fetch('http://localhost:5000/messanger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      })
      const res = await response.json()
      await setValue({
        name: '',
        tel: '',
        messanger: '',
      })
    } catch (error) {
      setIsLoader(false)
      setAlert(true)
      setAlertType('warn')
    }
    setIsLoader(false)
    setAlert(true)
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
      setAlert(false)
    }, 3000)
    reset()
  }

  return (
    <>
      <Form
        className={s.QuestionsRemain__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            className={s.QuestionsRemain__label}
            htmlFor="name"
          >
            {t('QuestionsRemain.input.label.name')}
          </label>
          <input
            {...register('name', {
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
              maxLength: {
                value: 50,
                message: 'Максимум 50 символов',
              },
            })}
            onChange={e => handleChange(e, setValue)}
            className={s.QuestionsRemain__input}
            id="name"
            type="text"
            placeholder={t('QuestionsRemain.input.placeholder.name')}
            value={value.name}
            style={
              errors.name ? { outline: '1px solid red' } : { outline: 'none' }
            }
          />
          <>
            {errors.name && (
              <p className={s.error}>
                {errors.name.message || 'Error'}
              </p>
            )}
          </>
        </div>
        <div>
          <label
            className={s.QuestionsRemain__label}
            htmlFor="tel"
          >
            {t('QuestionsRemain.input.label.phone')}
          </label>
          <input
            {...register('tel', {
              required: 'Обязательное поле',
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: 'Введите в формате +999 999999999',
              },
            })}
            onChange={e => handleChange(e, setValue)}
            className={s.QuestionsRemain__input}
            type="tel"
            id="tel"
            placeholder={t('QuestionsRemain.input.placeholder.phone')}
            value={value.tel}
            style={
              errors.tel ? { outline: '1px solid red' } : { outline: 'none' }
            }
          />
          <>
            {errors.tel && (
              <p className={s.error}>
                {errors.tel.message || 'Error'}
              </p>
            )}
          </>
        </div>
        <div>
          <label
            className={s.QuestionsRemain__label}
            htmlFor="messanger"
          >
            {t('QuestionsRemain.input.label.messanger')}
          </label>
          <select
            {...register('messanger')}
            className={s.QuestionsRemain__input}
            id="messanger"
            name="messanger"
            onChange={e => handleChange(e, setValue)}
            defaultValue={value.messanger}
          >
            <option
              value=""
              disabled
            >
              {t('QuestionsRemain.input.option.messanger')}
            </option>
            <option value="WhatsApp">
              {t('QuestionsRemain.input.option.WhatsApp')}
            </option>
            <option value="Telegram">
              {t('QuestionsRemain.input.option.Telegram')}
            </option>
            <option value="Viber">
              {t('QuestionsRemain.input.option.Viber')}
            </option>
          </select>
        </div>

        <Button
          className={s.QuestionsRemain__btn}
          text={isLoader ? <SourceLoader /> : t('QuestionsRemain.btn')}
          type="submit"
          disabled={disabled}
        />
      </Form>
      {alert && (
        <Alert
          type={alertType}
          className={s.QuestionsRemain__alert}
        >
          {alertType === 'success'
            ? 'Ваше сообщение успешно доставлено'
            : 'Упс...Не удалось отправить заявку!'}
        </Alert>
      )}
    </>
  )
}
