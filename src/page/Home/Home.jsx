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
import { IntersecPicture } from '../../components/IntersecPicture'

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ForWho />
        <SchoolComparison />
        <Table />
        <Price />
        <QuestionsRemain />
        <DailySchedule />
        <StudentStory />
        <TrainingProgram />
        <Author />
        <CommercialProject />
        <IntersecPicture className={s.secondPicture} />
        <Results />
        <Teachers />
      </Layout>
    </>
  )
}
