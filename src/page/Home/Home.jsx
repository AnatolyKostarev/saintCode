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
        <QuestionsRemain />
        <SchoolComparison />
        <Table />
        <Price />
        <DailySchedule />
        <StudentStory />
        <TrainingProgram />
        <Author />
        <CommercialProject />
        <Results />
        <Teachers />
      </Layout>
    </>
  )
}
