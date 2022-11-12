import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Portal } from '../../ui/Portal'
import { Form } from '../../ui/Form'
import { Button } from '../../ui/Button'
import iconClose from './icon-close.png'
import s from './ConsultForm.module.sass'

export const ConsultForm = ({ setIsConsultForm }) => {
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

  return (
    <Portal>
      <Form
        className={s.consultForm}
        onSubmit={e => e.preventDefault()}
      >
        <p className={s.consultForm__title}>
          Получи консультацию
        </p>
        <button
          className={s.consultForm__close}
          type="submit"
          onClick={() => closeForm()}
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
            size={31}
          />
          <input
            className={s.consultForm__tel}
            type="tel"
            placeholder="+7 (999) 999 99 99"
            size={31}
          />
          <input
            className={s.consultForm__mail}
            type="mail"
            placeholder="Электронная почта"
            size={31}
          />
          <textarea className={s.consultForm__message} cols={31}>
            Здесь можно написать вопрос = )
          </textarea>
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
