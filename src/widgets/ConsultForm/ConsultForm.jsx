import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Portal } from '../../ui/Portal'
import { Form } from '../../ui/Form'
import { Button } from '../../ui/Button'
import iconClose from './icon-close.png'
import s from './ConsultForm.module.sass'

export const ConsultForm = ({ setIsConsultForm }) => {
  const [value, setValue] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  })

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

  function handleChange(e) {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value.trimStart(),
    }))
  }

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
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      })
        .then(res => res.json())
        .then(() => {
          setValue({
            name: '',
            tel: '',
            email: '',
            message: '',
          })
        })
    } catch (error) {
      console.log(error)
    }
    reset()
  }

  return (
    <Portal>
      <Form
        className={s.consultForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={s.consultForm__title}>
          Получи консультацию
        </p>
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
        <div className={s.consultForm__wrapper}>
          <div>
            <input
              className={s.consultForm__name}
              id="name"
              name="name"
              {...register('name', {
                // required: 'Обязательное поле',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 50,
                  message: 'Максимум 50 символов',
                },
              })}
              type="text"
              placeholder="Имя"
              size={31}
              onChange={handleChange}
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
            <input
              className={s.consultForm__tel}
              id="tel"
              name="tel"
              {...register('tel', {
                required: 'Обязательное поле',
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: 'Введите в формате +999 999999999',
                },
              })}
              type="tel"
              placeholder="+999 999999999"
              size={31}
              onChange={handleChange}
              value={value.tel}
              style={
                errors.tel ? { outline: '1px solid red' } : { outline: 'none' }
              }
            />
            {errors.tel && (
              <p className={s.error}>
                {errors.tel.message || 'Error'}
              </p>
            )}
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
                  message: 'Максимум 50 символов',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Недопустимый формат email',
                },
              })}
              type="email"
              placeholder="Электронная почта"
              size={31}
              onChange={handleChange}
              value={value.email}
              style={
                errors.email
                  ? { outline: '1px solid red' }
                  : { outline: 'none' }
              }
            />
            {errors.email && (
              <p className={s.error}>
                {errors.email.message || 'Error'}
              </p>
            )}
          </div>

          <div>
            <textarea
              className={s.consultForm__message}
              id="message"
              name="message"
              {...register('message', {
                maxLength: {
                  value: 500,
                  message: 'Максимум 500 символов',
                },
              })}
              placeholder="Здесь можно написать вопрос = )"
              cols={31}
              onChange={handleChange}
              value={value.message}
              style={
                errors.message
                  ? { outline: '1px solid red' }
                  : { outline: 'none' }
              }
            >
              Здесь можно написать вопрос = )
            </textarea>
            {errors.message && (
              <p className={s.error}>
                {errors.message.message || 'Error'}
              </p>
            )}
          </div>
          {errors.tel && (
            <div className={s.errorBox}>
              <p>
                Пожалуйста, заполните все обязательные поля
              </p>
            </div>
          )}
        </div>
        <Button
          className={s.consultForm__btn}
          text="Отправить"
          type="submit"
        />
        <p className={s.consultForm__terms}>
          Нажимая на кнопку Отправить, ты
        </p>

        <p className={s.consultForm__terms}>
          принимаешь
          {' '}
          <Link to="/">
            <span>
              условия передачи информации
            </span>
          </Link>
        </p>
      </Form>
    </Portal>
  )
}
