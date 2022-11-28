import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ToTop } from '../components/ToTop'

export const Layout = ({ children }) => {
  const [topIsActive, setTopIsActive] = useState(false)

  const changeHeader = () => {
    window.scrollY >= 1000
      ? setTopIsActive(true)
      : setTopIsActive(false)
  }
  window.addEventListener('scroll', changeHeader)

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {topIsActive
            && <ToTop />}
      <Footer />
    </>
  )
}
