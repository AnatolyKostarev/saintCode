import { v4 as uuidv4 } from 'uuid'
import backEnd from './img/image-backend.jpg'
import frontEnd from './img/image-frontend.jpg'
import time from './img/image-time.jpg'
import interview from './img/image-interview.jpg'
import hr from './img/image-HR.jpg'
import developer from './img/image-developer.jpg'

export const articles = [
  {
    id: uuidv4(),
    image: backEnd,
    caption: 'Тренинг собеседования Junior Backend Developer',
    description:
      'Тренинг собеседования с техническим директором. Запись с занятий по трудоустройству для начинающих веб-разработчиков в SaintCode Bootcamp',
    route: '*',
    icon: true,
  },
  {
    id: uuidv4(),
    image: frontEnd,
    caption: 'Тренинг собеседования Junior Frontend Developer',
    description:
      'Тренинг собеседования с техническим директором. Запись с занятий по трудоустройству для начинающих веб-разработчиков в SaintCode Bootcamp',
    route: '*',
    icon: true,
  },
  {
    id: uuidv4(),
    image: time,
    caption: 'Беспощадное время',
    description:
      'Статья о работе с датой и временем в программировании. Автор — Игорь Поддубный, эксперт SaintCode Bootcamp',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: interview,
    caption: 'Интервью с разработчиком Игорем Поддубным',
    description:
      'Интервью с разработчиком из международной IT-компании. В конце текста советы о том, с чего начать новичку',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: hr,
    caption: 'Кадровый голод в России на IT-специалистов',
    description:
      'Почему в стране не хватает кадров — и на кого пойти учиться, чтобы быть востребованным',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: developer,
    caption: 'Интервью с разработчиком Николаем Поляковым',
    description:
      'Интервью с senior frontend из международной IT-компании. В конце текста советы о том, с чего начать новичку',
    route: '*',
    icon: false,
  },
]
