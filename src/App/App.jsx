import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '../routes'

const App = () => {
  return (
    <div>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
