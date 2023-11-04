import HomePage from '../pages/HomePage/HomePage.js'
import { Navigate } from 'react-router-dom'

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
    element: <div>test</div>
  }
]

export default routes