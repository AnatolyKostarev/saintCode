import { Layout } from '../../layout/Layout'
import { Hero } from '../../components/Hero/Hero'
import ForWho from '../../components/ForWho/ForWho'
import { SchoolComparison } from '../../components/SchoolComparison/SchoolComparison'
import { Price } from '../../components/Price/Price'
import { QuestionsRemain } from '../../components/QuestionsRemain/QuestionsRemain'
import { DailySchedule } from '../../components/DailySchedule/DailySchedule'
import { TrainingProgram } from '../../components/TrainingProgram/TrainingProgram'
import Teachers from '../../components/Teachers/Teachers'
import Author from '../../components/Author/Author'
import Results from '../../components/Results/Results'
import CommercialProject from '../../components/CommercialProject/CommercialProject'

export const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ForWho />
        <SchoolComparison />
        <Price />
        <QuestionsRemain />
        <DailySchedule />
        <TrainingProgram />
        <Author />
        <CommercialProject />
        <Results />
        <Teachers />
      </Layout>
    </>
  )
}
