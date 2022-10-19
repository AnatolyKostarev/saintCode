import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { SchoolComparison } from '../../components/SchoolComparison/SchoolComparison'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SchoolComparison />
      </main>
    </>
  )
}
