import offLineIcon from './icon-offline.svg'
import onLineIcon from './icon-online.svg'
import mixedIcon from './icon-mixed.svg'

export const dataPrice = [
  {
    id: 1,
    start: new Date(2022, 9, 18).toLocaleString('ru-Ru', {
      day: '2-digit',
      month: 'long',
    }),
    type: 'Вживую',
    price: 195_000,
    priceWithDiscount: 150_000,
    discountLastDay: '25 октября',
    description:
      'Каждый день ты ездишь в буткемп в центре Петербурга, где занимаешься с другими офлайн-студентами. Рабочая атмосфера помогает сосредоточиться и оставаться в тонусе, а живое общение с преподавателями и одногруппниками — поддерживает твою мотивацию стать веб-программистом в кратчайшие сроки.',
    icon: offLineIcon,
  },
  {
    id: 2,
    start: new Date(2022, 9, 18).toLocaleString('ru-Ru', {
      day: '2-digit',
      month: 'long',
    }),
    type: 'Онлайн',
    price: 100_000,
    priceWithDiscount: 80_000,
    discountLastDay: '25 октября',
    description:
      'Ты занимаешься вместе с офлайн-группой — но через Discord, где преподаватель уделяет тебе столько же времени, сколько и остальным студентам. В отличие от других онлайн-школ, здесь ты сразу получаешь ответы на все вопросы. Подходит тем, кто хорошо организован и может учиться удалённо.',
    icon: onLineIcon,
  },
  {
    id: 3,
    start: new Date(2022, 9, 18).toLocaleString('ru-Ru', {
      day: '2-digit',
      month: 'long',
    }),
    type: 'Смешанный',
    price: 135_000,
    priceWithDiscount: 105_000,
    discountLastDay: '25 октября',
    description:
      'Формат 50/50 — занимаешься вместе со всеми, частично онлайн из дома, частично офлайн в буткемпе в Петербурге. Подойдёт людям, которые не всегда могут сосредоточиться дома и хотят общаться с другими студентами и преподавателями вживую, но не готовы полностью оплатить офлайн-обучение.',
    icon: mixedIcon,
  },
]
