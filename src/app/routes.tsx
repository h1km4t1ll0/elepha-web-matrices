import HomePage from '../pages/HomePage/HomePage.js'
import { Navigate } from 'react-router-dom'
import { MatrixPage } from '@/pages/MatrixPage/MatrixPage.js'

const routes = [
  {
    path: 'matrix',
    element: <Navigate to='/matrix/rest' />
  },
  {
    path: 'matrix/:name',
    element: <MatrixPage />
  },
  {
    path: '*',
    element: <Navigate to='/matrix/rest' />
  }
]

export default routes