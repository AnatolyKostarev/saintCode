import { v4 as uuidv4 } from 'uuid'
import founderLogo from './img/image-founder.jpg'
import founderLogo2x from './img/image-founder-2x.jpg'
import coFounderLogo from './img/image-cofounder.jpg'
import coFounderLogo2x from './img/image-cofounder-2x.jpg'
import techLogo from './img/image-tech.jpg'
import techLogo2x from './img/image-tech-2x.jpg'
import consultantLogo from './img/image-consultant.jpg'
import consultantLogo2x from './img/image-consultant-2x.jpg'
import consultantX5 from './img/image-consultantX5.jpg'
import consultantX52x from './img/image-consultantX5-2x.jpg'
import coFounderSecond from './img/image-cofounder2.jpg'
import coFounderSecond2x from './img/image-cofounder2-2x.jpg'
import creator from './img/image-creator.jpg'
import creator2x from './img/image-creator-2x.jpg'
import creatorSecond from './img/image-creator2.jpg'
import creatorSecond2x from './img/image-creator2-2x.jpg'

export const teamData = [
  {
    id: uuidv4(),
    commonImg: founderLogo,
    retinaImg: founderLogo2x,
    memberName: 'Женя Гриценко',
    status: 'Основатель',
    content: ['Проводил образовательную профориентационную программу для старшеклассников «Город будущего» и клуб дебатов', 'Организовал серию федеральных турниров по киберспорту, а также акции с Greenpeace', 'Провел более 20 рекламных кампаний, в том числе для DNS'],
    title: 'Образование:',
    education: ['ИТМО, University of Seoul, Философское консультирование по программе Оскара Бренифье (phD Sorbonne University)', 'Московский институт рекламы, туризма и шоу-Бизнеса'],
  },
  {
    id: uuidv4(),
    commonImg: coFounderLogo,
    retinaImg: coFounderLogo2x,
    memberName: 'Саша Мельников',
    status: 'Сооснователь',
    content: ['Основной вид деятельности: консалтинг и корпоративное обучение', 'Обучил более 60 специалистов (продажи, консалтинг, юридическое сопровождение сделок по покупке бизнеса, soft skills, командная работа)', 'Автор/соавтор книг «Старт в бизнесе. Купить готовый бизнес или открыть по франшизе?», «Всё о бизнесе за два часа. Секреты юристов и бухгалтеров»'],
    title: 'Образование:',
    education: ['СПбГЭТУ, факультет электроники', 'РГУП, юридический факультет'],

  },
  {
    id: uuidv4(),
    commonImg: techLogo,
    retinaImg: techLogo2x,
    memberName: 'Костя Ефимов',
    status: 'Технический директор, более 7 лет коммерческого опыта',
    content: ['Составитель первой версии программы по JavaScript', 'Сделал цифровую систему, управляющую питанием в школах', 'Создал одну из трёх существующих на рынке систем для автоматов по продаже воды'],
  },
  {
    id: uuidv4(),
    commonImg: consultantLogo,
    retinaImg: consultantLogo2x,
    memberName: 'Саша Чистяков',
    status: 'Консультант проекта, экс-технический директор, более 20 лет коммерческого опыта',
    content: ['DevOps Engineer, Software Architect, Backend developer', 'Преподавал администрирование Linux в Высшей инженерной школе Политехнического университета', 'Постоянный спикер IT-конференций', 'Участник ПК-конференций GolangConf и DevOpsConf', 'Соорганизатор Санкт-Петербургского сообщества DevOps-инженеров'],
  },
  {
    id: uuidv4(),
    commonImg: consultantX5,
    retinaImg: consultantX52x,
    memberName: 'Андрей Смирнов',
    status: 'Консультант проекта, более 10 лет коммерческого опыта',
    content: ['Head of Client Development в X5 Retail Group', 'Провёл более тысячи технических и не только собеседований', 'Выступает с лекциями про тимлидство и soft skills', 'Один из организаторов конференции Frontend Conf', 'Ведущий подкаста Frontend Weekend'],
  },
  {
    id: uuidv4(),
    commonImg: coFounderSecond,
    retinaImg: coFounderSecond2x,
    memberName: 'Игорь Поддубный',
    status: 'Составитель подготовительной программы по JavaScript, более 10 лет коммерческого опыта',
    content: ['C#-разработчик в Veeam', 'Написал программу обучения студентов Политехнического университета по мобильной разработке'],
  },
  {
    id: uuidv4(),
    commonImg: creator,
    retinaImg: creator2x,
    memberName: 'Глеб Свечников',
    status: 'Составитель первой версии программы по фронтенду, 14 лет коммерческого опыта',
    content: ['UI-разработчик', 'Учился в МИРЭА и PoliMi, стажировался в итальянском стартапе TVBlob по объединению телевизора и интернета до того, как это стало мейнстримом :)', 'С 2011 года специализируется на frontend разработке. Работал в Early morning (веб-студия в Милане), «Дневник.ру» (международная e-learning компания), Intermedia (облачные офисные приложения), Simlinic (IoT-решения для клиник), сейчас разрабатывает интерфейсы в «Инфокультуре».', 'Разработал программу и вел кружок «Компьютерное обучение математике». В свободное время занимается гражданским активизмом и мейкерством.'],
  },
  {
    id: uuidv4(),
    commonImg: creatorSecond,
    retinaImg: creatorSecond2x,
    memberName: 'Юра Иовков',
    status: 'Составитель программы по бэкенду, более 16 лет коммерческого опыта',
    content: ['Преподавал компьютерную графику и базы данных в ВПИ ВолгГТУ', 'Backend для игры RomeWar + написал собственный фреймворк под JS', 'Собственный стартап AirCMS'],
  },
]
