import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import ForWho from '../../components/ForWho/ForWho'
import { SchoolComparison } from '../../components/SchoolComparison/SchoolComparison'
import { DailySchedule } from '../../components/DailySchedule/DailySchedule'
import Footer from '../../components/Footer/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWho />
        <SchoolComparison />
        <DailySchedule />
      </main>
      <Footer />
    </>
  )
}
