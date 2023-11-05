import HomePage from '../pages/HomePage/HomePage.js'
import { Navigate } from 'react-router-dom'
import { MatrixPage } from '@/pages/MatrixPage/MatrixPage.js'

const routes = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'matrix',
    element: <Navigate to='/' />
  },
  {
    path: 'matrix/:name',
    element: <MatrixPage />
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]

export default routes