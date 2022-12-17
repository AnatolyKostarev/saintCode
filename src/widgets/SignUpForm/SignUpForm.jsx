import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { handleChange } from '../../utils/inputHandleChange'
import { Portal } from '../../ui/Portal'
import { Form } from '../../ui/Form'
import { Alert } from '../../ui/Alert'
import { Loader } from '../../ui/Loader'
import { Button } from '../../ui/Button'
import iconClose from '../ConsultForm/icon-close.png'
import s from './SignUpForm.module.sass'

export const SignUpForm = ({ setIsSignUpForm }) => {
  const [value, setValue] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  })
  const [isLoader, setIsLoader] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [disabled, setDisabled] = useState(false)
  const { t } = useTranslation()

  const escSignUpForm = e => {
    if (e.key === 'Escape') {
      setIsSignUpForm(false)
    }
  }

  const closeForm = () => {
    setIsSignUpForm(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', e => escSignUpForm(e))
    return document.removeEventListener('keydown', e => escSignUpForm(e))
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      message: '',
    },
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        tel: '',
        email: '',
        message: '',
      })
    }
  }, [formState, reset])

  const onSubmit = async () => {
    setIsLoader(true)
    try {
      const response = await fetch('http://localhost:5000/send', {
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
        email: '',
        message: '',
      })
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
      <div
        className={s.consultForm__popup}
        onClick={() => closeForm()}
      >
        <div
          className={s.consultForm__container}
          onClick={e => e.stopPropagation()}
        >
          <Form
            className={s.consultForm}
            onSubmit={handleSubmit(onSubmit)}

          >
            <button
              className={s.consultForm__close}
              type="button"
              onClick={e => closeForm(e)}
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
                  {t('SignUpForm.title')}
                </p>
                <div>
                  <input
                    className={s.consultForm__name}
                    id="name"
                    {...register('name', {
                      required: t('SignUpForm.name.name'),
                      minLength: {
                        value: 3,
                        message: t('SignUpForm.name.minLength'),
                      },
                      maxLength: {
                        value: 50,
                        message: t('SignUpForm.name.maxLength'),
                      },

                    })}
                    type="text"
                    placeholder={t('SignUpForm.name.placeholder')}
                    size={39}
                    onChange={e => handleChange(e, setValue)}
                    value={value.name}
                    style={
                      errors.name
                        ? { outline: '1px solid #EA6342', background: 'rgba(234, 99, 66, 0.1)', border: 0 }
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
                  <input
                    className={s.consultForm__tel}
                    id="tel"
                    name="tel"
                    {...register('tel', {
                      required: t('SignUpForm.tel.required'),
                      pattern: {
                        value:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: t('SignUpForm.tel.message'),
                      },
                    })}
                    type="tel"
                    placeholder="+999 999999999"
                    size={39}
                    onChange={e => handleChange(e, setValue)}
                    value={value.tel}
                    style={
                      errors.tel
                        ? { outline: '1px solid #EA6342', background: 'rgba(234, 99, 66, 0.1)', border: 0 }
                        : { outline: 'none' }
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
                  <input
                    className={s.consultForm__mail}
                    id="email"
                    name="email"
                    {...register('email', {
                      // required: 'Пожалуйста, заполните все обязательные поля',
                      minLength: {
                        value: 6,
                        message: t('SignUpForm.mail.minLength'),
                      },
                      maxLength: {
                        value: 50,
                        message: t('SignUpForm.mail.maxLength'),
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: t('SignUpForm.mail.message'),
                      },
                    })}
                    type="email"
                    placeholder={t('SignUpForm.mail.placeholder')}
                    size={39}
                    onChange={e => handleChange(e, setValue)}
                    value={value.email}
                    style={
                      errors.email
                        ? { outline: '1px solid #EA6342', background: 'rgba(234, 99, 66, 0.1)', border: 0 }
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
                        message: t('SignUpForm.textarea.maxLength'),
                      },
                    })}
                    placeholder={t('SignUpForm.textarea.placeholder')}
                    cols={42}
                    onChange={e => handleChange(e, setValue)}
                    value={value.message}
                    style={
                      errors.message
                        ? { outline: '1px solid #EA6342', background: 'rgba(234, 99, 66, 0.1)', border: 0 }
                        : { outline: 'none' }
                    }
                  >
                    {t('SignUpForm.textarea.placeholder')}
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
                  text={isLoader ? <Loader /> : t('SignUpForm.button')}
                  type="submit"
                  disabled={disabled}
                />
                <p className={s.consultForm__terms}>
                  {t('SignUpForm.terms.text1')}
                </p>
                <p className={s.consultForm__terms}>
                  <Link to="*">
                    <span>
                      {t('SignUpForm.terms.text2')}
                    </span>
                  </Link>
                </p>
              </div>
            )}
          </Form>
        </div>
      </div>
    </Portal>
  )
}
