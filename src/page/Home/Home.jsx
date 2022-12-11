import s from './Home.module.sass'
import { Layout } from '../../layout'
import { Hero } from '../../components/Hero'
import { ForWho } from '../../components/ForWho'
import { SchoolComparison } from '../../components/SchoolComparison'
import { Price } from '../../components/Price'
import { QuestionsRemain } from '../../components/QuestionsRemain'
import { DailySchedule } from '../../components/DailySchedule'
import { TrainingProgram } from '../../components/TrainingProgram'
import { Teachers } from '../../components/Teachers'
import { Author } from '../../components/Author'
import { Results } from '../../components/Results'
import { CommercialProject } from '../../components/CommercialProject'
import { StudentStory } from '../../components/StudentStory'
import { Table } from '../../components/Table'
import { Video } from '../../components/Video'

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Video />
        <ForWho />
        <QuestionsRemain title="Сложно? Давай объясним!" subtitle="Оставь заявку — мы свяжемся с тобой через мессенджер." />
        <TrainingProgram />
        <CommercialProject />
        <Teachers />
        <Author />
        <Results />
        <DailySchedule />
        <StudentStory />
        {/* <SchoolComparison /> */}
        {/* <Table /> */}
        <Price />
        <QuestionsRemain className={s.bottom} title="Остались вопросы?" subtitle="Запишись на бесплатную консультацию — всё расскажем и объясним." />
      </Layout>
    </>
  )
}
