import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { APP_URL, APP_CONSULT } from '../../api'
import { Portal } from '../../ui/Portal'
import { Form } from '../../ui/Form'
import { Alert } from '../../ui/Alert'
import { Button } from '../../ui/Button'
import { Loader } from '../../ui/Loader'
import iconClose from './icon-close.png'
import s from './ConsultForm.module.sass'

export const ConsultForm = ({ setIsConsultForm }) => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoader, setIsLoader] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [disabled, setDisabled] = useState(false)

  const { t } = useTranslation()

  const nameChange = e => {
    setName(e.target.value.trimStart())
  }

  const emailChange = e => {
    setEmail(e.target.value.trimStart())
  }

  const messageChange = e => {
    setMessage(e.target.value.trimStart())
  }

  const escConsultForm = e => {
    if (e.key === 'Escape') {
      setIsConsultForm(false)
    }
  }

  const closeForm = () => {
    setIsConsultForm(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', e => escConsultForm(e))
    return document.removeEventListener('keydown', e => escConsultForm(e))
  }, [])

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(name, tel, email, message)
    }
  }, [formState, reset])

  const onSubmit = async data => {
    // console.log('data', data)
    setIsLoader(true)
    try {
      const response = await fetch(`${APP_URL}${APP_CONSULT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const res = await response.json()
    } catch (error) {
      setIsLoader(false)
      setIsAlert(true)
      setAlertType('warn')
    }
    setIsLoader(false)
    setIsAlert(true)
    setDisabled(true)
    reset()
  }

  return (
    <Portal>
      <Form
        className={s.consultForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className={s.consultForm__close}
          type="button"
          onClick={() => closeForm()}
        >
          <img
            src={iconClose}
            alt="cross"
          />
        </button>
        {isAlert ? (
          <Alert type={alertType} />
        ) : (
          <div className={s.consultForm__wrapper}>
            <p className={s.consultForm__title}>
              {t('ConsultForm.title')}
            </p>
            <div>
              <input
                className={s.consultForm__name}
                id="name"
                name="name"
                {...register('name', {
                  // required: 'Обязательное поле',
                  minLength: {
                    value: 3,
                    message: t('ConsultForm.name.minLength'),
                  },
                  maxLength: {
                    value: 50,
                    message: t('ConsultForm.name.maxLength'),
                  },
                })}
                type="text"
                placeholder={t('ConsultForm.name.placeholder')}
                size={31}
                onChange={nameChange}
                value={name}
                style={
                  errors.name
                    ? {
                      outline: '1px solid #EA6342',
                      background: 'rgba(234, 99, 66, 0.1)',
                      border: 0,
                    }
                    : { outline: 'none' }
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
              <Controller
                control={control}
                name="tel"
                rules={{
                  required: t('ConsultForm.tel.required'),
                  minLength: {
                    value: 10,
                    message: t('ConsultForm.tel.message'),
                  },
                }}
                render={({ field: { ref, ...field } }) => (
                  <PhoneInput
                    {...field}
                    inputClass={s.phone__input}
                    dropdownStyle={{ color: '#000' }}
                    buttonStyle={{
                      border: 'none',
                      background: 'none',
                      margin: '0',
                    }}
                    country="ru"
                    inputExtraProps={{
                      ref,
                      required: true,
                      autoFocus: true,
                    }}
                    style={
                      errors.tel
                        ? {
                          outline: '1px solid #EA6342',
                          background: 'rgba(234, 99, 66, 0.1)',
                          marginBottom: '5px',
                          border: 0,
                        }
                        : { outline: 'none' }
                    }
                  />
                )}
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
              <input
                className={s.consultForm__mail}
                id="email"
                name="email"
                {...register('email', {
                  // required: 'Обязательное поле',
                  maxLength: {
                    value: 50,
                    message: t('ConsultForm.email.maxLength'),
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t('ConsultForm.mail.message'),
                  },
                })}
                type="email"
                placeholder={t('ConsultForm.mail.placeholder')}
                size={31}
                maxLength="50"
                onChange={emailChange}
                value={email}
                style={
                  errors.email
                    ? {
                      outline: '1px solid #EA6342',
                      background: 'rgba(234, 99, 66, 0.1)',
                      border: 0,
                    }
                    : { outline: 'none' }
                }
              />
              <>
                {errors.email && (
                  <p className={s.error}>
                    {errors.email.message || 'Error'}
                  </p>
                )}
              </>
            </div>
            <div>
              <textarea
                className={s.consultForm__message}
                id="message"
                name="message"
                {...register('message', {
                  maxLength: {
                    value: 500,
                    message: t('ConsultForm.textarea.maxLength'),
                  },
                })}
                placeholder={t('ConsultForm.textarea.placeholder')}
                maxLength="500"
                cols={31}
                onChange={messageChange}
                value={message}
                style={
                  errors.message
                    ? {
                      outline: '1px solid #EA6342',
                      background: 'rgba(234, 99, 66, 0.1)',
                      border: 0,
                    }
                    : { outline: 'none' }
                }
              >
                {t('ConsultForm.textarea.placeholder')}
              </textarea>
              <>
                {errors.message && (
                  <p className={s.error}>
                    {errors.message.message || 'Error'}
                  </p>
                )}
              </>
            </div>
            <Button
              className={s.consultForm__btn}
              text={isLoader ? <Loader /> : t('ConsultForm.button')}
              type="submit"
              disabled={disabled}
            />
            <p className={s.consultForm__terms}>
              {t('ConsultForm.terms.text1')}
            </p>
            <p className={s.consultForm__terms}>
              {t('ConsultForm.terms.text2')}
              {' '}
              <Link to="*">
                <span>
                  {t('ConsultForm.terms.text3')}
                </span>
              </Link>
            </p>
          </div>
        )}
      </Form>
    </Portal>
  )
}
