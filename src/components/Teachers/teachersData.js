import Alex from './Alex.png'
import Alex2x from './Alex-2x.png'
import Yuri from './Yuri.png'
import Yuri2x from './Yuri-2x.png'
import Vasylii from './Vasylii.png'
import Vasylii2x from './Vasylii-2x.png'
import Kostya from './Kostya.png'
import Kostya2x from './Kostya-2x.png'

export const teachersData = [
  {
    id: 1,
    largePhoto: Yuri2x,
    smallPhoto: Yuri,
    teacherName: 'Юра Матюхин',
    experience: '8 лет',
    traineeCount: 'Обучил 42 стажёра',
    stack:
      'HTML, CSS, JavaScript (React/Redux, Vue, Svelte, TypeScript), Webpack, Sass, BEM',
    list: [
      'Frontend в канадском стартапе Life House Hotels, в студии StudWork, в спортивном приложении Ride With Locals. А также создавал аналог Jira (Pyrus)',
      'Промо-проекты для Lays, Philips, Siemens, Beeline, Ford, Amediateka, Renault, Sony Xperia, Unicredit Bank',
    ],
  },
  {
    id: 2,
    largePhoto: Kostya2x,
    smallPhoto: Kostya,
    teacherName: 'Костя Ефимов',
    experience: '7 лет',
    traineeCount: 'Обучил 16 стажёров',
    stack:
      'HTML, CSS, JS (Vue, Vuex), Stylus, BEM, PHP (Laravel, Symfony), C, PostgreSQL, MySQL, Redis',
    list: [
      'Fullstack web-developer в Пилки, в американском проекте ConsumerReports,в новозеландском 7Glyphs. А также создавал криптокошелёк FreeWallet и сайт крупного агентство недвижимости Владис',
      'Разработал систему контроля и взаимодействия автоматов по продаже воды',
    ],
  },
  {
    id: 3,
    largePhoto: Vasylii2x,
    smallPhoto: Vasylii,
    teacherName: 'Вася Шлыков',
    experience: '5 лет',
    traineeCount: 'Обучил 4 стажёров',
    stack:
      'HTML, CSS, JavaScript/jQuery, PostgreSQL, MongoDB, Node.js, Express, Hapi, Nest, React, TypeScript, Redux, Context API',
    list: ['Backend в Кари, MySoft'],
  },
  {
    id: 4,
    largePhoto: Alex2x,
    smallPhoto: Alex,
    teacherName: 'Саша Вивтоненко',
    experience: '7 лет',
    traineeCount: 'Обучил 23 стажёра',
    stack: 'HTML, CSS, JavaScript (Svelte), Node.js, Nginx, PostgreSQL, NoSQL',
    list: [
      'Руководителем IT-отдела EthereumWorks, VPluse',
      'Разработчиком в CRM Agency Smart',
    ],
  },
]
