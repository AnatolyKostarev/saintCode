import { Home } from './page/Home'
import { School } from './page/School'
import { Preprogram } from './page/Preprogram'
import { FAQ } from './page/FAQ'
import {
  BackendPage, Blog, FrontendPage, HR, InterviewPoddubny, InterviewPolyakov, Time,
} from './page/Blog'
import { NotFound } from './page/NotFound'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/school', element: <School /> },
  { path: '/program', element: <Preprogram /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/time', element: <Time /> },
  { path: '/blog/backend', element: <BackendPage /> },
  { path: '/blog/frontend', element: <FrontendPage /> },
  { path: '/blog/interviewPoddubny', element: <InterviewPoddubny /> },
  { path: '/blog/human_resources_it', element: <HR /> },
  { path: '/blog/interviewPolyakov', element: <InterviewPolyakov /> },
  { path: '*', element: <NotFound /> },
]
