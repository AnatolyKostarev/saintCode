import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import ForWho from '../../components/ForWho/ForWho'
import { SchoolComparison } from '../../components/SchoolComparison/SchoolComparison'
import { DailySchedule } from '../../components/DailySchedule/DailySchedule'
import { TrainingProgram } from '../../components/TrainingProgram/TrainingProgram'
import Footer from '../../components/Footer/Footer'
import Teachers from '../../components/Teachers/Teachers'
import Author from '../../components/Author/Author'
import { Price } from '../../components/Price/Price'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWho />
        <SchoolComparison />
        <Price />
        <DailySchedule />
        <TrainingProgram />
        <Author />
        <Teachers />
      </main>
      <Footer />
    </>
  )
}
