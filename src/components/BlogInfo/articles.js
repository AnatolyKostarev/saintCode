import { v4 as uuidv4 } from 'uuid'
import backEnd from './img/image-backend.jpg'
import frontEnd from './img/image-frontend.jpg'
import time from './img/image-time.jpg'

export const articles = [
  {
    id: uuidv4(), image: backEnd, caption: 'Тренинг собеседования Junior Backend Developer', description: 'Тренинг собеседования с техническим директором. Запись с занятий по трудоустройству для начинающих веб-разработчиков в SaintCode Bootcamp', route: '*',
  },
  {
    id: uuidv4(), image: frontEnd, caption: 'Тренинг собеседования Junior Frontend Developer', description: 'Тренинг собеседования с техническим директором. Запись с занятий по трудоустройству для начинающих веб-разработчиков в SaintCode Bootcamp', route: '*',
  },
  {
    id: uuidv4(), image: time, caption: 'Беспощадное время', description: 'Статья о работе с датой и временем в программировании. Автор — Игорь Поддубный, эксперт SaintCode Bootcamp', route: '*',
  },
]
