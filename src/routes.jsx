import { Home } from './page/Home/Home'
import { School } from './page/School/School'
import { Preprogram } from './page/Preprogram/Preprogram'
import { Questions } from './page/Questions/Questions'
import { Blog } from './page/Blog/Blog'
import { NotFound } from './page/NotFound/NotFound'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/school', element: <School /> },
  { path: '/program', element: <Preprogram /> },
  { path: '/faq', element: <Questions /> },
  { path: '/blog', element: <Blog /> },
  { path: '*', element: <NotFound /> },
]
