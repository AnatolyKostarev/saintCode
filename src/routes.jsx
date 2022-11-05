import { Home } from './page/Home'
import { School } from './page/School'
import { Preprogram } from './page/Preprogram'
import { FAQ } from './page/FAQ'
import { Blog } from './page/Blog'
import { NotFound } from './page/NotFound'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/school', element: <School /> },
  { path: '/program', element: <Preprogram /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/blog', element: <Blog /> },
  { path: '*', element: <NotFound /> },
]
