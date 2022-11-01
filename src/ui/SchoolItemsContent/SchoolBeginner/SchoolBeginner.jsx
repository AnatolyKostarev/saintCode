import React from 'react'
import s from './SchoolBeginner.module.sass'

export const SchoolBeginner = ({ show }) => {
  return (
    <div className={show ? s.school__content : s.school__content__active}>
      <p>
        Вот ты решил стать программистом. Как правило, ты идёшь смотреть ютуб,
        читать статьи и, может, советоваться со знакомым. Как только первая
        информация поступила в твою голову, ты понял, что программирование — это
        слишком абстрактно. Нужно определиться с кучей новых переменных.
      </p>
      <p>
        <ul>
          Например:
          <li>
            В какой отрасли я хочу работать?
          </li>
          <li>
            {' '}
            Сколько времени нужно на
            освоение?
          </li>
          <li>
            {' '}
            Как учиться: самостоятельно или пойти в школу?
          </li>
          <li>
            Какой язык
            программирования лучше для новичка?
          </li>
          <li>
            Какие технологии нужно освоить,
            чтобы взяли на первую работу?
          </li>
          <li>
            {' '}
            В какой школе лучше учиться? Чем они
            реально отличаются? И какая подходит именно мне?
          </li>
          <li>
            Когда пора
            заканчивать учиться и надо тратить большую часть времени на поиск
            работы?
          </li>
          <li>
            Почему работодатели игнорируют 95% моих откликов? Как это
            исправить?
          </li>
          <li>
            {' '}
            Какие компании хорошие для профессионального роста?
          </li>
          <li>
            Как не
            совершить суицид, когда читаешь описание вакансии джуна?
          </li>
               
        </ul>
      </p>
      <p>
        К нам часто приходят выпускники из других школ, так как не смогли найти работу. Они вроде уже что-то умеют, но этого недостаточно, чтобы найти работу.
      </p>
      <p>
        Порой нужно просто навести порядок в голове. Чётко расставить приоритеты и осознать свои сильные стороны.
      </p>
      <p>
        Мы с радостью помогаем таким ребятам, так как сами прошли через этот ад)
      </p>
    </div>
  )
}
