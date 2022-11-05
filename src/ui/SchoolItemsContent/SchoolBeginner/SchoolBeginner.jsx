import React from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import s from './SchoolBeginner.module.sass'

export const SchoolBeginner = ({ show, className }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(s.school__content, { [s.school__content__active]: show }, className)}>
      <p>
        {t('SchoolBegginer.header')}
      </p>
      <div>
        <ul>
          {t('SchoolBegginer.listTitle')}
          <li>
            {t('SchoolBegginer.item1')}
          </li>
          <li>
            {' '}
            {t('SchoolBegginer.item2')}
          </li>
          <li>
            {' '}
            {t('SchoolBegginer.item3')}
          </li>
          <li>
            {t('SchoolBegginer.item4')}
          </li>
          <li>
            {t('SchoolBegginer.item5')}
          </li>
          <li>
            {' '}
            {t('SchoolBegginer.item6')}
          </li>
          <li>
            {t('SchoolBegginer.item7')}
          </li>
          <li>
            {t('SchoolBegginer.item8')}
          </li>
          <li>
            {' '}
            {t('SchoolBegginer.item9')}
          </li>
          <li>
            {t('SchoolBegginer.item10')}
          </li>
        </ul>
      </div>
      <div>
        {t('SchoolBegginer.paragraph1')}
      </div>
      <div>
        {t('SchoolBegginer.paragraph2')}
      </div>
      <div>
        {t('SchoolBegginer.paragraph3')}
      </div>
    </div>
  )
}
