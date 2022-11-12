import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Portal } from '../../ui/Portal'
import { Form } from '../../ui/Form'
import { Button } from '../../ui/Button'
import iconClose from '../ConsultForm/icon-close.png'
import s from './SignUpForm.module.sass'

export const SignUpForm = ({ setIsSignUpForm }) => {
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
            onSubmit={e => e.preventDefault()}
          >
            <p className={s.consultForm__title}>
              Записаться на обучение онлайн
            </p>
            <button
              className={s.consultForm__close}
              type="submit"
              onClick={e => closeForm(e)}
            >
              <img
                src={iconClose}
                alt="cross"
              />
            </button>
            <div className={s.consultForm__wrapper}>
              <input
                className={s.consultForm__name}
                type="text"
                placeholder="Имя"
                size={39}
              />
              <input
                className={s.consultForm__tel}
                type="tel"
                placeholder="+7 (999) 999 99 99"
                size={39}
              />
              <input
                className={s.consultForm__mail}
                type="mail"
                placeholder="Электронная почта"
                size={39}
              />
              <textarea
                className={s.consultForm__message}
                cols={42}
              >
                Здесь можно написать вопрос = )
              </textarea>
            </div>
            <Button
              className={s.consultForm__btn}
              text="Отправить"
              type="submit"
            />
            <p className={s.consultForm__terms}>
              Нажимая на кнопку Отправить, ты принимаешь
            </p>
            <p className={s.consultForm__terms}>
              <Link to="*">
                <span>
                  условия передачи информации
                </span>
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </Portal>
  )
}
