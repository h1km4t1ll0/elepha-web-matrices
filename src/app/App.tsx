import { FC, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes.js'
import { notification } from 'antd'
import { fetchMatrices, getMatrixError } from '@/app/store/matrix/matrix.js'
import { useAppDispatch, useAppSelector } from '@/app/hooks/storeHooks.js'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const elements = useRoutes(routes)
  const matrixError = useAppSelector(getMatrixError())
  const [notificationApi, context] = notification.useNotification()

  useEffect(() => {
    dispatch(fetchMatrices())
  }, [dispatch])

  useEffect(() => {
    if (matrixError)
      notificationApi['error']({ message: 'Не удалось загрузить матрицы. Попробуйте позже' })
  }, [matrixError, notificationApi])

  return <>
    {context}
    {elements}
  </>
}

export default App
