import { FC, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes.js'
import { message } from 'antd'
import { fetchMatrices, getMatrixError } from '@/app/store/matrix/matrix.js'
import { useAppDispatch, useAppSelector } from '@/app/hooks/storeHooks.js'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const elements = useRoutes(routes)
  const matrixError = useAppSelector(getMatrixError())
  const [messageApi, context] = message.useMessage();

  useEffect(() => {
    dispatch(fetchMatrices())
  }, [dispatch])

  useEffect(() => {
    if (matrixError)
      messageApi.error({ content: matrixError, style: { textAlign: "right" } }).then()
  }, [matrixError, messageApi])

  return <>
    {context}
    {elements}
  </>
}

export default App
