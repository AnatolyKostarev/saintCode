import { v4 as uuidv4 } from 'uuid'

export const dataPrice = [
  {
    id: uuidv4(),
    start: 'locale',
    type: 'offline',
    price: 195_000,
    priceWithDiscount: 150_000,
    discountLastDay: 'finalDate',
    description: 'item1',
    location: 'spb',
  },
  {
    id: uuidv4(),
    start: 'locale',
    type: 'online',
    price: 100_000,
    priceWithDiscount: 80_000,
    discountLastDay: 'finalDate',
    description: 'item2',
    location: 'anyPlace',
  },
  {
    id: uuidv4(),
    start: 'locale',
    type: 'hybrid',
    price: 135_000,
    priceWithDiscount: 105_000,
    discountLastDay: 'finalDate',
    description: 'item3',
    location: 'spb',
  },
  {
    id: uuidv4(),
    start: 'locale',
    type: 'offline',
    price: 195_000,
    priceWithDiscount: 150_000,
    discountLastDay: 'finalDate',
    description: 'item4',
    location: 'tos',
  },
]
