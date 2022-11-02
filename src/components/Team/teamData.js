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
  },
  {
    id: uuidv4(),
    commonImg: coFounderLogo,
    retinaImg: coFounderLogo2x,
    memberName: 'Саша Мельников',
    status: 'Сооснователь',
  },
  {
    id: uuidv4(),
    commonImg: techLogo,
    retinaImg: techLogo2x,
    memberName: 'Костя Ефимов',
    status: 'Технический директор, более 7 лет коммерческого опыта',
  },
  {
    id: uuidv4(),
    commonImg: consultantLogo,
    retinaImg: consultantLogo2x,
    memberName: 'Саша Чистяков',
    status: 'Консультант проекта, экс-технический директор, более 20 лет коммерческого опыта',
  },
  {
    id: uuidv4(),
    commonImg: consultantX5,
    retinaImg: consultantX52x,
    memberName: 'Андрей Смирнов',
    status: 'Консультант проекта, более 10 лет коммерческого опыта',
  },
  {
    id: uuidv4(),
    commonImg: coFounderSecond,
    retinaImg: coFounderSecond2x,
    memberName: 'Игорь Поддубный',
    status: 'Составитель подготовительной программы по JavaScript, более 10 лет коммерческого опыта',
  },
  {
    id: uuidv4(),
    commonImg: creator,
    retinaImg: creator2x,
    memberName: 'Глеб Свечников',
    status: 'Составитель первой версии программы по фронтенду, 14 лет коммерческого опыта',
  },
  {
    id: uuidv4(),
    commonImg: creatorSecond,
    retinaImg: creatorSecond2x,
    memberName: 'Юра Иовков',
    status: 'Составитель программы по бэкенду, более 16 лет коммерческого опыта',
  },
]
