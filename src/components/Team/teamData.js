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
    memberName: 'name1',
    status: 'status1',
    content: ['content11', 'content12', 'content13'],
    title: 'title',
    education: ['education11', 'education12'],
  },
  {
    id: uuidv4(),
    commonImg: coFounderLogo,
    retinaImg: coFounderLogo2x,
    memberName: 'name2',
    status: 'status2',
    content: ['content21', 'content22', 'content23'],
    title: 'title',
    education: ['education21', 'education22'],

  },
  {
    id: uuidv4(),
    commonImg: techLogo,
    retinaImg: techLogo2x,
    memberName: 'name3',
    status: 'status3',
    content: ['content31', 'content32', 'content33'],
  },
  {
    id: uuidv4(),
    commonImg: consultantLogo,
    retinaImg: consultantLogo2x,
    memberName: 'name4',
    status: 'status4',
    content: ['content41', 'content42', 'content43', 'content44', 'content45'],
  },
  {
    id: uuidv4(),
    commonImg: consultantX5,
    retinaImg: consultantX52x,
    memberName: 'name5',
    status: 'status5',
    content: ['content51', 'content52', 'content53', 'content54', 'content55'],
  },
  {
    id: uuidv4(),
    commonImg: coFounderSecond,
    retinaImg: coFounderSecond2x,
    memberName: 'name6',
    status: 'status6',
    content: ['content61', 'content62'],
  },
  {
    id: uuidv4(),
    commonImg: creator,
    retinaImg: creator2x,
    memberName: 'name7',
    status: 'status7',
    content: ['content71', 'content72', 'content73', 'content74'],
  },
  {
    id: uuidv4(),
    commonImg: creatorSecond,
    retinaImg: creatorSecond2x,
    memberName: 'name8',
    status: 'status8',
    content: ['content81', 'content82', 'content83'],
  },
]
