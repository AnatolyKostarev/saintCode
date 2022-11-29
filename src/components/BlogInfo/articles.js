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
    caption: 'item_1',
    description:
      'item_1',
    route: '*',
    icon: true,
  },
  {
    id: uuidv4(),
    image: frontEnd,
    caption: 'item_2',
    description:
      'item_2',
    route: '*',
    icon: true,
  },
  {
    id: uuidv4(),
    image: time,
    caption: 'item_3',
    description:
      'item_3',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: interview,
    caption: 'item_4',
    description:
      'item_4',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: hr,
    caption: 'item_5',
    description:
      'item_5',
    route: '*',
    icon: false,
  },
  {
    id: uuidv4(),
    image: developer,
    caption: 'item_6',
    description:
      'item_6',
    route: '*',
    icon: false,
  },
]
