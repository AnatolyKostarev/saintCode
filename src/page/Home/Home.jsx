import { useTranslation } from 'react-i18next'
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
import s from './Home.module.sass'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Layout>
        <Hero />
        <Video />
        <ForWho />
        <QuestionsRemain title={t('QuestionsRemain.top.title')} subtitle={t('QuestionsRemain.top.subtitle')} />
        <TrainingProgram />
        <CommercialProject />
        <Teachers />
        <Author />
        <Results />
        <DailySchedule />
        <StudentStory />
        {/* <SchoolComparison />
        <Table /> */}
        <Price />
        <QuestionsRemain className={s.bottom} title={t('QuestionsRemain.bottom.title')} subtitle={t('QuestionsRemain.bottom.subtitle')} />
      </Layout>
    </>
  )
}
