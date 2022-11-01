import React from 'react'
import clsx from 'clsx'
import ReactDOM from 'react-dom'
import s from './Modal.module.sass'

const Modal = ({
  className,
  children,
  isOpen,
  setIsOpen,
}) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={clsx(s.Modal, className)} onClick={() => setIsOpen(false)}>
      <div className={clsx(s.content)} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  )
}

export default Modal
