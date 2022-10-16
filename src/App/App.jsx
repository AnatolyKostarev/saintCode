import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '../routes'
import s from './App.module.sass'

const App = () => {
  return (
    <div className={s.App}>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
